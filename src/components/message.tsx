import { Slot } from '@builder.io/qwik'

const Message = ({
 // class, // if I use this, it won't compile
 // style, // if I use this, my code would become inconsistent
 className, // if I use this, I get the className warning
}) => {
	return <div
			class={className || ""}
		>
			<Slot />
		</div>
}

export default Message
