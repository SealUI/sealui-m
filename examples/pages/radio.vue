<template>
    <div class="page-radio">
        <div class="page-radio__group">
            <seal-group title="基础用法">
                <seal-radio :options="radio001" @on-change="change"></seal-radio>
            </seal-group>
            <seal-group title="默认选中">
              <seal-radio :options="radio001" value="Html5" type="success"></seal-radio>
            </seal-group>

            <seal-group title="带icon">
                <seal-radio :options="radio002" @on-change="change" type="danger"></seal-radio>
            </seal-group>

            <seal-group :title="'选中的是：'+radio001Value">
              <seal-radio fill-mode :options="radio001" v-model="radio001Value" @on-change="change" fill-label="Other" fill-placeholder="填写其他的哦"></seal-radio>
            </seal-group>

        </div>
    </div>
</template>

<script>
export default {
    name: 'page-radio',
    data () {
        return {
            radio001: [ 'Html5', 'Javascript','CSS3','PHP' ],
            radio002 : [{
                icon : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAACK1BMVEVMaXEJm+wNlOpV//8Kl+wNk+v///8QjukQj+kMlOoMleoPkeoPkOkLluoJnPULmuwOkuoPkeoKm+wTnP8LlewJoPUQj+gLoPkMluoLl+sLmescqv8LmOsPp+8Kmu0MlusMnu4OkukLm+z///8KmesKnOwJoPALnO0LnO0KmuwKmOr///8MlOkPken///////////8Lmu3////W7vv///////////87r+////////////////8Qjun////5/P4VkOkSj+kil+r8/f5Fp+4Rjunv9/0UkOnx+P39/v7A4fktnOv+/v7z+f1ase80n+z3+/7J5fqHxvMynuyIx/TY7Psvnes8o+0fleoZkumWzfXR6fo5oexpuPGTzPXN5/rr9f0dlOrm8/wqmuu02/iOyfTE4/n4+/7i8fxWr+9/wvO53vg7ou3Z7fvj8vxOq+5xvPHf7/yi0/Zmt/Ekl+ro9Pyx2vdsufHH5fl1vfJUru8XkenW6/tLqu7d7/uy2veSy/Sm1fa23Ph4v/J2vvKZz/VKqe4+pO3t9v17wPJgtPBYsO/Q6PpCpe15wPKp1vfp9P2Aw/OYzvVIqO6l1Pab0PXa7fut2PfF4/komeue0fY3oezh8PyQyvSUzPVvu/Fds/ByvPLT6vtktvDL5vobk+rl8/zk8vxApe0lmOun1fbc7vu93/hQre9itfD6/P5Sre/0+v683/iGxfMakumLyPS13PjS6vqv2ffD4vk6Vy9RAAAAPHRSTlMAbPEDo/QF/v7t5fv81zSJ9v17Ddob/ivew58JsyBl4j33igGqYjZYhpWYPeX7vLoDVr7kSDnhcK36OgKPUBGtAAAFaklEQVR4AcTSRXojQQyG4can1GZmZnt4/3tmlV0uklwkxw6NGQuV7wKvSiVPua7fajaSQroo3iumC0mj2fK7ntPavU7qBy72I9Xptd2o9eg74Wb0ParbVqtRIiCRSKKqRXZaqUG6WmVqRw0XARQLFqExO84PodEwPzZz/Riaxb4BO+vDoP5M93MnBKNoovXVgwDGBQN1d0mwEC0V2XIWlsqWVdxcDGvFOXl3noHFMn9k3RLBalSSc0cClhMjGXcpYD2x5H/vRs7f/V8BJ4k7/zwnOIrmt9xcBs7K5K675RgOi8tX4Syclr3mruC41WV3QJDu6XG97R+ko8ElNwwg38NaB0YQXoAnUOivHozJuTsjDphmZ3AfHDD6p64PHhj+sTuOueB4fATnwQUjf+iGQz54GB7AC/DBWBzAgYwg3+2Jgr07BSeM6Q6u8MKVrVut8cK16gaOAM7jAqINnHDDyX+3LrhhUd9smhve7DrFD6e899rED1P7He6BH0bvHe58BdzZfLGUIt+L1Cen7cPPuFfa87qwD7+xZs9bkiRhFMBrbZsvsLbu7Um3bdvd4+bYMz22bRtvtzurjDpV8UXG7snfv4WMSH3ahUSfZJ5I/8D0bVKvD5GKHiqFDhJ9mPkAqZikMoFkH2TeRyomqLQh2fvm0GQtKmTMc60C1OtIw3wqj2Dh9czLSMN6Kgtg4aXMG0jDBcZuuLDwRuY5pGADlZWw8Zzdgd2Ki76/sWQWgsNUhlI6cMPmA2OV/Ftpd9Witcu7kGteyFi3k8aB64+PM09p3d7JemQrp1INywO/AVFrbxEl46vPuPjXVcYGlsDKG3JUbGouolFRx51R/KmilLFFsPOS+AKpqKOFo80+sJvKEdh5XXpl+iH/NrBsZFH7vdpj+9Y8CKkz2F7G2Br7nP596FwsI8nK3hOtDpRD5X0HPZpshKX39WHxUjfJK6fOIV/jlh1llKyErQ/0iUAvyb4AgqYzt4uo49XA1ofa1OcayT6Y1LeHzFd4px6WntAme/3kVSRoWjdIjakFjbDxiS69rbE7aU7bFWoUTMxFSPKFNqHfTI7AhrN4IXU6mxtg9qK2hBkhh2HlXB0Fp7cvgcHH2qJtkNwCKysp89aUR5B8qi1TC2yD6jGadTaPymWq5iJ75HVY2MxkW6cbke9zfStigLyDZOuobN3VScHAgWuBphWha75sIouRaJjKfhdN27spGa8t0TVf8gJUFen1wMxZT2XhX9+enb5ASWnxmVnEXhAabH0k18PILaYydgh/m7dgkKJwfYM60/qW4kaSRT4MZrqptCxBLJpcSNnWU12qpahroj4iubQEEncvs9y/K7xIdSovbwDeFtvGrR7J7lFoOetCZlkV5L9I99PgyvBPcqO8miQr1wa6yHCUWcJyaATX62jwy8/f/yaMBpxi/mnZSScnM7lzntmmSqAXbFlGkx+/FoYhjWP8y/lVe6L4Akz3FzHbrXUBZCdP0+BZafzTs4L/qOy4fHxV+46DIXP0lsCsvMVwYHHg5R6k0dk9SDa3VTywPOJzqgsoKp6BnaEO8cDyULPmYSl1Nh1ugL2Zs+KB5TFuxe5O5ujeOxThv7lZJR5YHlw7G2qLd/JvZR2LThzB/3FtSjqweVTfVbPN31bR+Efxdm2FABCEQRj3nBh3d/qhi+uDctH03GYb+PN93wS9hZ6SYQlOSHDiIR/OwDHEQTKcB6As9pLhPORmsZYM50FGi81/GGBV981/GIBkp00tF53r81gQ4pEACAUI7AREvzxzNt88DuyeU5SdwvtwrsAHGnySwkc4fHbEh1aStKxlSstalW66mK4tH22niekk+WAnMB98A1PlsirWcKimAAAAAElFTkSuQmCC',
                value: '支付宝支付',
                key: '001',
            },{
                icon : 'https://open.weixin.qq.com/zh_CN/htmledition/res/assets/res-design-download/icon32_appwx_logo.png',
                value : '微信支付',
                key: '002',
            }],
            radio001Value: 'Html5',
        }
    },
    mounted (){

    },
    methods : {
        change (value) {
          console.log('change:', value)
        }
    }
};
</script>

<style lang="less" scoped>
    .page-radio {
        padding: 0rem;
        & .page-radio__group {
            margin-bottom: .3rem;
        }
    }
</style>
