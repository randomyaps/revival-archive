// Builds on the Svelte fade function to allow for easier delays for
// staggered animations, taken directly from Mercury

import { fade, type FadeParams } from "svelte/transition"

export default (
	node: HTMLElement,
	props: FadeParams & {
		num?: number
		total?: number
		max?: number
	} = { duration: 300 }
) => {
	if (props.num && props.total)
		props.delay = (props.num * 150) / Math.min(props.total, props?.max || 6)
	return fade(node, props)
}
