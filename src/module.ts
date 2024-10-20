import {defineNuxtModule, addPlugin, createResolver, installModule, addComponentsDir} from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  css: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    css: true,
  },
  async setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.modules.push(
      "nuxt-icon",
    );

    await installModule("nuxt-icon");


    await addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      pathPrefix: false,
      prefix: "",
      global: true,
    });
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
