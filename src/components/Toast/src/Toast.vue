<template>
	<div
		:class="[
			$s.Toast,
			$s[`type_${type}`],
			$s[`variant_${variant}`],
		]"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<div :class="$s.IconAligner">
			<component
				:is="iconComponent"
				:class="$s.Icon"
				inline
			/>
		</div>
		<div>
			<!-- @slot toast content -->
			<slot />
		</div>
	</div>
</template>

<script>
import AlertTriangle from '@square/maker-icons/AlertTriangle';
import AlertCircle from '@square/maker-icons/AlertCircle';
import CheckCircle from '@square/maker-icons/CheckCircle';
import Info from '@square/maker-icons/Info';

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	components: {
		AlertTriangle,
		AlertCircle,
		CheckCircle,
		Info,
	},

	inheritAttrs: false,

	props: {
    /**
     * type of notice
     */
		type: {
			type: String,
			default: 'info', // TODO: check if type:info -> generic
			validator: (type) => ['error', 'success', 'warning', 'info'].includes(type),
		},
    /**
     * notice variant
     */
		variant: {
			type: String,
			default: 'inline',
			validator: (variant) => ['inline', 'block'].includes(variant),
		},
	},

	computed: {
		iconComponent() {
			if (this.type === 'error') {
				return AlertCircle;
			}
			if (this.type === 'success') {
				return CheckCircle;
			}
			if (this.type === 'warning') {
				return AlertTriangle;
			}
			return Info;
		},
	},
};
</script>

<style module="$s">
.Toast {
	--font-family: inherit;

	display: flex;
	color: var(--color);
	font-size: 14px;
	font-family: var(--font-family);
	line-height: 24px;
	border-radius: 8px;
}

.type_error {
	--color: rgba(255, 255, 255, 1);
	--color-bg: #ce3217;
}

.type_warning {
	--color: rgba(0, 0, 0, 0.9);
	--color-bg: rgba(255, 255, 255, 1);
}

.type_success {
	--color: rgba(0, 0, 0, 0.9);
	--color-bg: rgba(255, 255, 255, 1);
}

.type_info {
	--color: rgba(0, 0, 0, 0.9);
	--color-bg: rgba(255, 255, 255, 1);
}

.variant_block {
	padding: 16px;
	background-color: var(--color-bg);
}

.IconAligner {
	display: flex;
	align-items: center;
	height: 24px;
	margin-right: 8px;
}

.Icon {
	width: 16px;
	height: 16px;
	fill: var(--color-bg);
	stroke: white;
}
</style>
