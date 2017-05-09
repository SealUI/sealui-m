#!/usr/bin/env sh

function _color_(){
    case "$1" in
        red)    nn="31";;
        green)  nn="32";;
        yellow) nn="33";;
        blue)   nn="34";;
        purple) nn="35";;
        cyan)   nn="36";;
    esac
    ff=""
    case "$2" in
        bold)   ff=";1";;
        bright) ff=";2";;
        uscore) ff=";4";;
        blink)  ff=";5";;
        invert) ff=";7";;
    esac
    color_begin=`echo "\033[${nn}${ff}m"`
    color_end=`echo "\033[0m"`
    while read line; do
        echo
        echo "${color_begin}${line}${color_end}"
        echo
    done
}

git checkout master
git merge dev

if [ "$1" == "github" ]
    then
    set -e
    echo "输入commit: "
    read commit
    read -p "发布原因 $commit ? (Y/n)" -n 1 -r

    if [[ $REPLY =~ ^[Yy]$ ]]
        then
        git add -A
        git commit -m "$commit"
        echo '正在发布到github...' | _color_ purple bold
        git push origin master
        echo "发布成功" | _color_ green bold
    fi
elif [ "$1" == "tag" ]
    then
    set -e
    echo "输入版本号: " | _color_ green bold
    read VERSION
    read -p "确定发布 $VERSION 吗? (Y/n)" -n 1 -r

    if [[ $REPLY =~ ^[Yy]$ ]]
        then
        git tag v$VERSION
        echo '正在发布tag...' | _color_ purple bold
        git push origin v$VERSION
        echo "tag v$VERSION 发布成功" | _color_ green bold
    else
        echo "取消发布" | _color_ red bold
    fi
fi

exit

set -e
echo "输入版本号: "
read VERSION

read -p "确定发布 $VERSION 吗? (Y/n)" -n 1 -r

if [[ $REPLY =~ ^[Yy]$ ]]
    then
    echo
    # 发布到github
    if [ "$1" == "github" ]
        then
        git add -A
        git commit -m "[build] $VERSION"
        echo '正在发布到github...' | _color_ purple bold
        git push origin master
        echo
        echo "v$VERSION 发布成功" | _color_ green bold

    # 发布到github tag
    elif [ "$1" == "tag" ]
        then
        git tag v$VERSION
        git push origin v$VERSION
        echo
        echo "tag v$VERSION 发布成功" | _color_ green bold
    fi

    echo
fi
