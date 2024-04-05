<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const defaultValue = "item-1";

const accordionItems = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    title: "Is it unstyled?",
    content:
      "Yes. It's unstyled by default, giving you freedom over the look and feel.",
  },
  {
    value: "item-3",
    title: "Can it be animated?",
    content: "Yes! You can use the transition prop to configure the animation.",
  },
];
</script>

<template>
  <div style="margin-left: 0.5in">
    <br>
    <i class="text-purple-900"> Accordion </i>
    <hr>
    <Accordion
      type="single"
      class="w-full"
      collapsible
      :default-value="defaultValue"
    >
      <AccordionItem
        v-for="item in accordionItems"
        :key="item.value"
        :value="item.value"
      >
        <AccordionTrigger>{{ item.title }}</AccordionTrigger>
        <AccordionContent>
          {{ item.content }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <br>
    <i class="text-purple-900"> Button </i>
    <hr>
    <br />
    <div>
      <Button>Click me</Button>
    </div>

    <br />
    <i class="text-purple-900"> Checkbox </i>
    <hr>
    <br />
    <div class="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        for="terms"
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>

    <br />
    <br />
    <i class="text-purple-900"> Label </i>
    <hr>
    <br />
    <div>
      <div class="flex items-center space-x-2">
        <Label for="terms">Here is a label.</Label>
      </div>
    </div>
  </div>
</template>