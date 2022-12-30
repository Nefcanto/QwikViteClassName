import { component$ } from '@builder.io/qwik';
import Message from '../components/message'

export default component$(() => {
  return (
  	<div>
    	<div className="text-red-400">This causes the className warning to be shown</div>
    	<div class="text-blue-400">This does not raise className warning</div>
    	<Message
    		className="text-green-400" // if I use this, then I get the warning
    		class="text-gree-400" // if I use this, then I can't define the component, it won't compile
    		style="text-green-400" // if I use this, my code would be inconsistent
    	>
    	</Message>
    </div>
  );
});
