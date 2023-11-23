<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import readXlsFile from "read-excel-file";
import {
  VDataTable,
  VDataTableRow,
  VDataTableFooter,
  VDataIterator,
} from "vuetify/lib/labs/components.mjs";
const items = ref([]);

const headers = [
  {
    title: "Denominación o Razón Social",
    key: '0',
  },
  {
    title: "Nombre(s)",
    key: '1',
  },
  {
    title: "Apellido paterno",
    key: '2',
  },
    {
      title: "Apellido Materno",
    key: '3',
  },
  {
    title: "Nombre Completo (apellido paterno materno y nombre(s) sin abreviaturas) o Razón Social",
    key: "4",
  },
  {
    title: "No. de Cliente",
    key: "5",
  },
  {
    title: "No. de Contacto",
    key: "6",
  },
  {
    title: "Fecha de Nacimiento (dd/mm/aaaa)",
    key: "7",
    value: item => new Date(item[7]).toLocaleDateString(),
  },
  {
    title: "Fecha de Constitución (dd/mm/aaaa)",
    key: "8",
    value: item => new Date(item[8]).toLocaleDateString(),
  },
  {
    title: "País de Nacimiento",
    key: "9",
  },
  {
    title: "Entidad Federativa de Nacimiento",
    key: "10",
  },
  {
    title: "País de Residencia",
    key: "11",
  },
  {
    title: "Nacionalidad",
    key: "12",
  },
  {
    title: "Género",
    key: "13",
  },
  {
    title: "RFC con Homoclave",
    key: "14",
  },
  {
    title: "Ocupación / Profesión",
    key: "15",
  },
  {
    title: "Actividad Económica / Giro Empresarial",
    key: "16",
  },
  {
    title: "Teléfono Principal",
    key: "17",
  },
  {
    title: "Teléfono 2 (opcional)",
    key: "18",
  },
  {
    title: "Correo Electrónico",
    key: "19",
  },
  {
    title: "CURP",
    key: "20",
  },
  {
    title: "FIEL",
    key: "21",
  },
  {
    title: "Nombre completo del Apoderado Legal",
    key: "22",
  },
  {
    title: "Nacionalidad del Apoderado Legal",
    key: "23",
  },
  {
    title: "Tipo y No. de Forma Migratoria (solo extranjeros)",
    key: "24",
  },
  {
    title: "Avenida / Calle",
    key: "25",
  },
  {
    title: "Número Exterior",
    key: "26",
  },
  {
    title: "Número Interior",
    key: "27",
  },
  {
    title: "Colonia",
    key: "28",
  },
  {
    title: "Delegación / Municipio",
    key: "29",
  },
  {
    title: "Ciudad / Población",
    key: "30",
  },
  {
    title: "Estado",
    key: "31",
  },
  {
    title: "Código Postal",
    key: "32",
  },
  {
    title: "País",
    key: "33",
  },
  {
    title: "País de Origen Avenida / Calle",
    key: "34",
  },
  {
    title: "País de Origen Número Exterior",
    key: "35",
  },
  {
    title: "País de Origen Número Interior",
    key: "36",
  },
  {
    title: "País de Origen Colonia",
    key: "37",
  },
  {
    title: "País de Origen Delegación / Municipio",
    key: "38",
  },
  {
    title: "País de Origen Ciudad / Población",
    key: "39",
  },
  {
    title: "País de Origen Estado",
    key: "40",
  },
  {
    title: "País de Origen Código Postal",
    key: "41",
  },
  {
    title: "País de Origen País",
    key: "42",
  },
  {
    title: "Productos y/o servicios que contratará con esta SOFOM ENR",
    key: "43",
  },
  {
    title: "Origen de los recursos a operar",
    key: "44",
  },
  {
    title: "Destino de los recursos a operar",
    key: "45",
  },
  {
    title: "Monto de operación (Importe del Crédito)",
    key: "46",
  },
  {
    title: "Pago mensual",
    key: "47",
  },
  {
    title: "Monto máximo en caso de pago anticipado",
    key: "48",
  },
  {
    title: "Monto de máximo de Pago",
    key: "49",
  },
  {
    title: "Número de operaciones (estimado mensual)",
    key: "50",
  },
  {
    title: "Frecuencia transaccional (estimado mensual)",
    key: "51",
  },
  {
    title: "¿Realizará pagos en efectivo?",
    key: "52",
  },
  {
    title: "En caso de utilizar dinero en efectivo",
    key: "53",
  },
  {
    title: "favor de especificar motivos y monto estimado mensual.",
    key: "54",
  },
  {
    title: "PPE",
    key: "55",
  },
  {
    title: "Dependencia:",
    key: "56",
  },
  {
    title: "Puesto:",
    key: "57",
  },
  {
    title: "Principales Funciones:",
    key: "58",
  },
  {
    title: "Período de Ejercicio:",
    key: "59",
  },
  {
    title: "PPE familiar",
    key: "60",
  },
  {
    title: "Nombre:",
    key: "61",
  },
  {
    title: "Parentesco/Relación:",
    key: "62",
  },
  {
    title: "Dependencia:",
    key: "63",
  },
  {
    title: "Puesto:",
    key: "64",
  },
  {
    title: "Principales Funciones:",
    key: "65",
  },
  {
    title: "Período de Ejercicio:",
    key: "66",
  },
  {
    title: "Actua en nombre de un tercero",
    key: "67",
  },
  {
    title: "Nombre propietario Real",
    key: "68",
  },
  {
    title: "Porveedor de Recursos",
    key: "69",
  },
  {
    title: "Nombre proveedor de recursos",
    key: "70",
  },
  {
    title: "Especifique a detalle las razones por las que decidió celebrar contratos con una SOFOM ENR en México:",
    key: "71",
  },
  {
    title: "Especifique su principal fuente de ingresos:",
    key: "72",
  },
  {
    title: "Especifique el origen de los recursos que operará con esta SOFOM ENR:",
    key: "73",
  },
  {
    title: "Especifique el destino de los recursos que operará con esta SOFOM ENR:",
    key: "74",
  },
  {
    title: "Nombre de cliente firmante",
    key: "75",
  },
  {
    title: "Funcionario SOFOM",
    key: "76",
  },
  {
    title: "Lugar",
    key: "77",
  },
  {
    title: "Fecha",
    key: "78",
    value: item => new Date(item[78]).toLocaleDateString(),
  },
];
const uploadExcel = () => {
  const input = document.getElementById("annex");
  readXlsFile(input.files[0]).then((rows) => {
    items.value = rows.slice(1, rows.length - 1);
  });
};
</script>

<template>
  <MainLayout page-title="Anexos PLD">
    <div class="flex flex-col items-center justify-center">

      <h2 class="py-6">Subir archivo Excel</h2>
      <!-- <input type="file" name="annex" id="annex" @change="uploadExcel()"> -->
      <v-file-input
        @change="uploadExcel()"
        class="w-[400px]"
        label="Archivo"
        variant="solo"
        name="annex"
        id="annex"
      ></v-file-input>
      <v-data-table
        :items="items"
        :headers="headers"
        no-data-title="No hay datos :("
        class="elevation-1 h-full w-full"
      >
      </v-data-table>

      <v-btn color="secondary" class="mt-4" @click="uploadExcel()">
        Subir
      </v-btn>
    </div>
  </MainLayout>
</template>
