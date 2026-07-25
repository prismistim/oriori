import withNuxt from "./.nuxt/eslint.conifg.mjs"
import oxlint from "eslint-plugin-oxlint"

export default withNuxt().prepent(
  eslint.conifgs['flat/recommended']
)
