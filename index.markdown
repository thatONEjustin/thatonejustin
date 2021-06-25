---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

# Justin P's smooth brain HQ 
*can't get any smoother than this*


<div x-data="{ message: 'I really like alpine', bool: false }"
 x-init="console.log(message)">
    <h3 x-bind:class="bool || 'text-green-500'" x-text="message"></h3>
    <button x-on:click="bool = !bool;">This should change stuff</button>

    <p class="cursor-pointer" x-show="bool" @click="alert('not in here')">do @ symbols work?</p>
</div>