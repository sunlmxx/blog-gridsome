<template>
    <footer class="footer">
        <div class="container">
            <span>Copyright &copy; 2021</span>
            <!-- <span v-html="settings.footer" /> -->
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            // settings: require("../../data/theme.json")
        }
    },
    props: {
        settings: {
            type: Object,
          request: true
        }
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
}
</style>
