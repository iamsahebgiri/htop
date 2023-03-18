<script setup lang="ts">
import { io } from "socket.io-client";
const systemInfo = [
  {
    label: "Platform",
    value: "Linux"
  },
  {
    label: "CPU Model",
    value: "AMD Ryzen 5 4600H"
  },
  {
    label: "Distro",
    value: "Ubuntu"
  },
  {
    label: "OS Versions",
    value: "20.04.6 LTS"
  },
  {
    label: "Hostname",
    value: "legion"
  },
  {
    label: "Arch",
    value: "x64"
  },
];

// {"cpu":{"manufacturer":"AMD","brand":"Ryzen 5 4600H with Radeon Graphics","speed":3,"cores":12,"cache":{"l1d":196608,"l1i":196608,"l2":3145728,"l3":4194304}},"osInfo":{"platform":"linux","distro":"Ubuntu","release":"20.04.6 LTS","codename":"Focal Fossa","kernel":"5.15.90.1-microsoft-standard-WSL2","arch":"x64","hostname":"legion"},"system":{"model":"WSL","manufacturer":"Microsoft"}}

const stats = [
  {
    label: "Speed",
    value: "3.00",
    unit: "Ghz"
  },
  {
    label: "Cores",
    value: "12"
  },
  {
    label: "Tasks",
    value: "32",
  },
  {
    label: "Uptime",
    value: "120",
    unit: "DAYS"
  },
];


const memory = {
  "total": 3776036864,
  "free": 1881214976,
  "used": 1894821888,
  "active": 1626009600,
  "available": 2150027264,
  "buffers": 63328256,
  "cached": 318865408,
  "slab": 120008704,
  "buffcache": 502202368,
  "swaptotal": 1073741824,
  "swapused": 2895872,
  "swapfree": 1070845952
};
const socket = io("http://localhost:3000");
socket.on("stats", (data) => {
  console.log(data);
});
</script>

<template>
  <main class="min-h-screen w-full font-mono p-4 text-sm flex flex-wrap flex-col gap-4">
    <section class="grid grid-cols-1 lg:grid-cols-6 bg-slate-800 p-6 rounded">
      <li v-for="{ label, value } in systemInfo" class="list-none">
        <div>
          <h1 class="uppercase text-slate-400">{{ label }}</h1>
          <p class="text-slate-50 mt-2">{{ value }}</p>
        </div>
      </li>
    </section>
    <section class="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <li v-for="{ label, value, unit } in stats" class="list-none bg-slate-800 p-6 rounded">
        <div>
          <h1 class="uppercase text-slate-50 text-base">{{ label }}</h1>
          <p class="text-amber-500 mt-2 text-4xl">{{ value }}<span class="text-slate-400 text-base ml-2">{{ unit }}</span>
          </p>
        </div>
      </li>
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <section class="bg-slate-800 p-6 rounded">
        <h1 class="uppercase text-slate-50 ">CPU Usage</h1>
      </section>
      <section class="bg-slate-800 p-6 rounded space-y-2">
        <h1 class="uppercase text-slate-50 ">Memory Usage</h1>
        <div class="space-y-1">
          <div class="flex justify-between">
            <h3 class="uppercase text-slate-400">Used</h3>
            <h3 class="text-slate-50">{{ ((memory.used / memory.total) * 100).toFixed(1) }}%</h3>
          </div>
          <div class="bg-slate-500">
            <div class=" bg-green-500 h-3" :style="{ width: ((memory.used / memory.total) * 100) + '%' }"></div>
          </div>
        </div>
      </section>
      <section class="bg-slate-800 p-6 rounded">
        hello
      </section>
      <section class="bg-slate-800 p-6 rounded">
        world
      </section>
    </section>

  </main>
</template>

<style scoped></style>
