<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Kablosuz
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" elevated>
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item :to="{name: route.page}" tag="div" v-ripple v-for="route in routes" :key="route.label" clickable>
            <q-item-section avatar>
              <q-icon :name="route.icon"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ route.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      routes: [
        {label: 'Anasayfa', page: 'index', icon: 'star_border'},
        {label: 'Tara', page: 'scan', icon: 'person'}
      ]
    }
  }
}
</script>
