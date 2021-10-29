<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  middleware({ redirect }) {
    redirect('/contracts');
  },
});
</script>
