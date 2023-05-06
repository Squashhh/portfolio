<script>
    import NavBar from '$lib/components/navbar/navbar.svelte';
    import Footers from '$lib/components/footers.svelte';
    import Me from '$lib/components/me.svelte';
    import Contact from '$lib/components/contact.svelte';
    import Pictures from '$lib/components/pictures.svelte';
    import Notice from '$lib/components/notice.svelte';
</script>

<NavBar/>
<Me/>
<div class="bar"></div>
<Pictures/>
<div class="bar"></div>
<Notice/>
<div class="bar"></div>
<Contact/>
<Footers/>
<style>
    .bar {
        margin: 32px;
        height: 2px;
        background-color: #D9D9D9;
    }
</style>