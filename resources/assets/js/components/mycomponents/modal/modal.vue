<template>
<div class="modal fade" v-bind:id="id" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content" :class="aClass">
            <slot></slot>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        props:['id', 'aClass']
    }
</script>

<style>
.primary{
	background-color: #337ab7;
	color: #fff;
}

.primary .modal-body{
	background-color: #fff;
	border-left: solid 1px #337ab7;
	border-right: solid 1px #337ab7;
	color: #000;
}

.primary .modal-footer{
	background-color: #fff;
	border-radius: 5px;
	border-left: solid 1px #337ab7;
	border-right: solid 1px #337ab7;
	border-bottom: solid 1px #337ab7;
	color: #000;
}
</style>