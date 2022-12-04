<template>
    <teleport to='body'>
        <button class="d-none" id="trigger-offcanvas" :class="name" type="button" data-bs-toggle="offcanvas"
            aria-controls="offcanvas">
        </button>
        <div v-if="barrierDismissible"
            :class="`text-bg-${mode} offcanvas-${placement} ${size !== '' ? `offcanvas-${size}` : ''} ${oClass !== '' ? oClass : ''}`"
            class="offcanvas" data-bs-backdrop="static" tabindex="-1" :id="name" aria-labelledby="offcanvasLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" :id="name">{{ title }}</h5>
                <button type="button" :class="mode === 'dark' ? 'btn-close-white' : 'btn-close'" class="btn-close"
                    data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <slot name="content">
                </slot>
            </div>
        </div>
        <div v-if="!barrierDismissible"
            :class="`text-bg-${mode} offcanvas-${placement} ${oClass !== '' ? oClass : ''} ${size !== '' ? `offcanvas-${size}` : ''} `"
            class="offcanvas" tabindex="-1" :id="name" aria-labelledby="offcanvasLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" :id="name">{{ title }}</h5>
                <button type="button" :class="mode === 'dark' ? 'btn-close-white' : 'btn-close'" class="btn-close"
                    data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <slot name="content">
                </slot>
            </div>
        </div>
        <div v-if="scrollable && barrierDismissible"
            :class="`text-bg-${mode} offcanvas-${placement} ${size !== '' ? `offcanvas-${size}` : ''} ${oClass !== '' ? oClass : ''}`"
            class="offcanvas" data-bs-backdrop="static" data-bs-scroll="true" tabindex="-1" :id="name"
            aria-labelledby="offcanvasLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" :id="name">{{ title }}</h5>
                <button type="button" :class="mode === 'dark' ? 'btn-close-white' : 'btn-close'" class="btn-close"
                    data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <slot name="content">
                </slot>
            </div>
        </div>
        <div v-if="scrollable"
            :class="`text-bg-${mode} offcanvas-${placement} ${oClass !== '' ? oClass : ''} ${size !== '' ? `offcanvas-${size}` : ''} `"
            class="offcanvas" data-bs-scroll="true" tabindex="-1" :id="name" aria-labelledby="offcanvasLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" :id="name">{{ title }}</h5>
                <button type="button" :class="mode === 'dark' ? 'btn-close-white' : 'btn-close'" class="btn-close"
                    data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <slot name="content">
                </slot>
            </div>
        </div>
    </teleport>
</template>


<script>
import { onMounted } from 'vue'
export default {
    props: {
        title: {
            type: String,
            default: '',
            required: false,
        },
        scrollable: {
            type: Boolean,
            default: false,
            required: false,

        },
        oClass: {
            type: String,
            default: '',
            required: false,

        },
        mode: {
            type: String,
            default: '',
            required: false,
            validator: function (value) {
                return ['light', 'dark'].indexOf(value);
            }
        },
        name: {
            type: String,
            default: '',
            required: true,
        },

        placement: {
            type: String,
            default: 'end',
            required: false,
            validator: function (value) {
                return ['start', 'end', 'top', 'bottom'].indexOf(value);
            }
        },

        size: {
            type: String,
            default: '',
            required: false,
            validator: function (value) {
                return ['sm', 'md', 'lg', 'xl', 'xxl'].indexOf(value);
            }
        },

        barrierDismissible: {
            type: Boolean,
            default: false,
            required: false,
        }
    },

    setup(props) {
        onMounted(() => {
            $(`.${props.name}`).attr("data-bs-target", `#${props.name}`)
        })
    }
}
</script>