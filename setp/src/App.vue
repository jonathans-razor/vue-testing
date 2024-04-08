<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>



<template>
  <div style="margin-left: 0.5in; margin-right: 0.5in; margin-top: .2in; margin-bottom: 1in">
  Hello World    

   <br />
    <br />
    <br />
    <i class="text-purple-900"> Button </i>
    <hr />
    <br />
    <div>
      <Button
        variant="outline"
        @click="
          () => {
            console.log('Button clicked');
          }
        "
      >
        Click Me
      </Button>

    </div>
  </div>
</template>