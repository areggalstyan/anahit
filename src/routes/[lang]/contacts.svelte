<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('contacts', fetch, page);
  }
</script>

<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import TextBar from '$lib/TextBar.svelte';

  export let data;
  export let lang;
</script>

<Header {data} {lang} route="/contacts" />
<div class="lg:grid md:p-8 bg-text" style="grid-template-columns: 3fr 1fr">
  <TextBar alignment="left">
    <h1 class="text-3xl">{data['name'].toUpperCase()}</h1>
    <h2 class="text-2xl">{data['contacts'].toUpperCase()}</h2>
    <div class="lg:inline-block mr-12">
      {#if data['address1'] || data['telephone1'] || data['email1'] || data['viber1'] || data['whatsapp1']}
        <p class="mt-12 rounded p-5 text-white bg-primary inline-flex flex-col">
        <span>
          {#if data['address1']}
            <i class="fas fa-map-marker-alt text-xl mr-3" />
            <span class="ml-[5px]">{data['address1']}</span>
          {/if}
        </span>
          <span>
          {#if data['telephone1']}
            <i class="fas fa-phone-alt text-xl mr-3" />
            {data['telephone1']}
          {/if}
        </span>
          <span>
          {#if data['email1']}
            <i class="fas fa-envelope text-xl mr-3" />
            {data['email1']}
          {/if}
        </span>
          <span>
          {#if data['viber1']}
            <i class="fab fa-viber text-xl mr-3" />
            {data['viber1']}
          {/if}
        </span>
          <span>
          {#if data['whatsapp1']}
            <i class="fab fa-whatsapp text-xl mr-3" />
            <span class="ml-[2.5px]">{data['whatsapp1']}</span>
          {/if}
        </span>
        </p>
      {/if}
    </div>
    <div class="inline-block">
      {#if data['address2'] || data['telephone2'] || data['email2'] || data['viber2'] || data['whatsapp2']}
        <p class="mt-12 rounded p-5 text-white bg-primary inline-flex flex-col">
        <span>
          {#if data['address2']}
            <i class="fas fa-map-marker-alt text-xl mr-3" />
            <span class="ml-[5px]">{data['address2']}</span>
          {/if}
        </span>
          <span>
          {#if data['telephone2']}
            <i class="fas fa-phone-alt text-xl mr-3" />
            {data['telephone2']}
          {/if}
        </span>
          <span>
          {#if data['email2']}
            <i class="fas fa-envelope text-xl mr-3" />
            {data['email2']}
          {/if}
        </span>
          <span>
          {#if data['viber2']}
            <i class="fab fa-viber text-xl mr-3" />
            {data['viber2']}
          {/if}
        </span>
          <span>
          {#if data['whatsapp2']}
            <i class="fab fa-whatsapp text-xl mr-3" />
            <span class="ml-[2.5px]">{data['whatsapp2']}</span>
          {/if}
        </span>
        </p>
      {/if}
    </div>
  </TextBar>
</div>
<Footer {data} {lang} route="/contacts" />