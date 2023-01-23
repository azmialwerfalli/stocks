<script lang="ts">
    import {page}   from '$app/stores';
</script>
<h1>An Error Happend!</h1>
<p>Error Status: {$page.status}:</p>
<p>Error Description: {$page.error?.message}</p>