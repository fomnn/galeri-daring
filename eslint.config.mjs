// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
	typescript: true,
	vue: true,
	stylistic: {
		indent: 'tab',
		semi: false,
	},
}, {
  rules: {
    "vue/no-deprecated-slot-attribute": 'off'
  }
})
