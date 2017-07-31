<template>
    <svg :class="classes">
        <use :xlink:href="iconId"></use>
    </svg>
</template>

<script>
    export default {
        props: {
            id: String,
            button: Boolean,
        },

        computed: {
            iconId() {
                return '#icon-' + ( this.id === 'arrow-left' ? 'arrow-right' : this.id );
            },

            classes() {
                return {
                    'icon': true,
                    ['icon-' + this.id]: true,
                    'icon-button': this.button,
                    'icon-mirrored': this.id === 'arrow-left',
                };
            },
        },
    };
</script>