<template>
    <!-- Modal -->
    <teleport to='body'>
        <!--trigger modal show method-->
        <button type="button" id="trigger" :class="name" class="btn btn-primary d-none" data-bs-toggle="modal">
        </button>
        <!--end-->

        <!--barrier dismissible: true-->
        <div v-if="barrierDismissible" class="modal fade" :id="name" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog"
                :class="`${centered ? 'modal-dialog-centered' : ''} ${scrollable ? 'modal-dialog-scrollable' : ''} ${modalSize}`">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <slot name="modal-body"></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="modal-footer"></slot>
                    </div>
                </div>
            </div>
        </div>
        <!--otherwise-->
        <!--default modal-->
        <div v-else class="modal fade" :id="name" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog"
                :class="`${centered ? 'modal-dialog-centered' : ''} ${scrollable ? 'modal-dialog-scrollable' : ''} ${modalSize}`">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <slot name="modal-body"></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="modal-footer"></slot>
                    </div>
                </div>
            </div>
        </div>
        <!--end default modal-->
    </teleport>
</template>

<script>
import { onMounted } from 'vue';
export default {
    name: 'BS-Modal',
    props: {
        name: {
            type: String,
            default: 'exampleModal',
            required: true
        },
        title: {
            type: String,
            default: "Modal header title"
        },
        centered: {
            type: Boolean,
            required: false,
            default: false,
        },
        modalSize: {
            type: String,
            default: "",
            required: false,
            validator: (val) => {
                return ['modal-sm', 'modal-lg', 'modal-xl', 'modal-fullscreen'].includes(val)
            }
        },
        barrierDismissible: {
            type: Boolean,
            default: false,
            required: false
        },
        scrollable: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    setup(props) {
        onMounted(() => {
            $(`.${props.name}`).attr("data-bs-target", `#${props.name}`)
        })
    }
}
</script>
