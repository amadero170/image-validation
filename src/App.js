import "./App.css";
import Images from "./Images.js";
// import db from "./db.json";

const db = {
  db: [
    [
      "2703",
      "SIERRA CIRCULAR DE BANCO 10pul(254mm)",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/2703_Sierra_de_banco.png",
    ],
    [
      "2704",
      "SIERRA CIRCULAR DE BANCO 10pul",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/2704_Sierra_de_banco.png",
    ],
    [
      "3606",
      "ROUTER 1 H.P. 1/4pul 760 W",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/3606_Router.png",
    ],
    [
      "3706",
      "REBAJADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/3706_Multicortador.png",
    ],
    [
      "3709",
      "REBAJADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/3709_Recortadora.png",
    ],
    [
      "4131",
      "SIERRA PARA METAL 185 mM",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/4131_Cortadora-circular-de-metal.jpg",
    ],
    [
      "4326",
      "SIERRA CALADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/4326_Sierra-caladora-400x338.png",
    ],
    [
      "6016",
      "TALADRO 5/8pul 16mm 480W, 700 rpm",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/763429-8-d.jpg",
    ],
    [
      "6407",
      "TALADRO 3/8pul(9.5mm) V.V.530W",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/A-98902.jpg",
    ],
    [
      "6408",
      "TALADRO 3/8pul CON BROQUERO SIN LLAVE",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/6408_Taladro.png",
    ],
    [
      "6413",
      "TALADRO 10MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/A-98902.jpg",
    ],
    [
      "6906",
      "LLAVE DE IMPACTO 3/4pul 19mm 1600 IMPACTOS",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/6906_Llave-de-impacto.png",
    ],
    [
      "6953",
      "LLAVE DE IMPACTO 1/2pul",
      "https://cdn.makitatools.com/apps/cms/img/695/d204aefb-2455-42e9-a440-65b1e695ec30_6953_p_1500px.png",
    ],
    [
      "9031",
      "LIJADORA DE BANDA 1-1/8 X 21pul 550W",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/Lijadora-de-banda_9031.png",
    ],
    [
      "9032",
      "LIJADORA DE BANDA 9mm",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/9032_lijadora-de-banda.jpg",
    ],
    [
      "9046",
      "LIJADORA ORBITAL 4-1/2pul X 9pul(114 X 228 m",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/9046_Lijadora_orbital.jpg",
    ],
    [
      "9105",
      "ESMERIL RECTO 5pul(127mm) 4800rpm 7500W",
      "https://www.makita.com.ar/uploads/products/1576187871-52033.jpeg",
    ],
    [
      "9403",
      "LIJADORA DE BANDA  4pulX24pul(101 X 609 mm)",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/9403_Lijadora_de_banda.jpg",
    ],
    [
      "9404",
      "LIJADORA DE BANDA 100mm",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/9404_Lijadora_de_banda.jpg",
    ],
    [
      "9910",
      "LIJADORA DE BANDA 3 X 18pul 1V 650W",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/9910-9911_Lijadora_de_banda.jpg",
    ],
    [
      "9911",
      "LIJADORA DE BANDA 3pul X 18pul (76 X 457 mm) V.V.",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/9910-9911_Lijadora_de_banda.jpg",
    ],
    [
      "1912B",
      "CEPILLO 110mm, 840W, 2mm PROF. MAX.",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/1912B_Cepillo-400x338.png",
    ],
    [
      "2012NB",
      "CEPILLO 110mm, 840W, 2mm PROF. MAX.",
      "https://cdn.makitatools.com/apps/cms/img/201/c5702ad7-dbb5-4423-977b-65f9ecd31482_2012nb_p_1500px.png",
    ],
    [
      "2414NB",
      "TRONZADORA DE METAL 14pul(355mm) 15A 2000W",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/2414NB_Cortadora_de_metal.png",
    ],
    [
      "3601B",
      "ROUTER 1-1/2 H.P. CARCASA METALICA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/3601B_Router.png",
    ],
    [
      "4100KB",
      "CORTADORA 125MM",
      "https://cdn.makitatools.com/apps/cms/img/410/22316c34-f403-49aa-9326-b45708641ae7_4100kb_p_1500px.png",
    ],
    [
      "4114S",
      "CORTADORA ANGULAR P/CONCRETO 355MM",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/4114S.jpg",
    ],
    [
      "4327K",
      "SIERRA CALADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/4327K_sierra-caladora.jpg",
    ],
    [
      "4350FCT",
      "SIERRA CALADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/4350FCT_Sierra-caladora-400x338.png",
    ],
    [
      "4350T",
      "SIERRA CALADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/4350T_SIERRA-CALADORA-400x338.png",
    ],
    [
      "5007MG",
      "SIERRA CIRCULAR 185 MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/5007MG_Sierra_circular.jpg",
    ],
    [
      "5007NK",
      "SIERRA CIRCULAR 185mm 7-1/4pul CON ESTUCHE",
      "https://cdn.makitatools.com/apps/cms/img/500/7bb5b460-662b-4f5d-b891-7efc0c75d1f4_5007nk_k_1500px.png",
    ],
    [
      "5008MG",
      "SIERRA CIRCULAR 210MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/5008MG_Sierra_circular-400x338.png",
    ],
    [
      "5377MG",
      "SIERRA CIRCULAR 185MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/5377MG_SIERRA-CIRCULAR-DE-TRANSMISION.png",
    ],
    [
      "5477NB",
      "SIERRA CIRCULAR DE TRANSMISION",
      "https://cdn.makitatools.com/apps/cms/img/547/e26d7dbe-bf81-4339-b9ab-faa72bda7484_5477nb_p_1500px.png",
    ],
    [
      "6302H",
      "TALADRO 1/2pul(12mm) V.VAR.REV. 0-550 570W",
      "https://cdn.makitatools.com/apps/cms/img/630/e18ea3f0-f933-42d1-b395-1c2dba7146f5_6302h_p_1500px.png",
    ],
    [
      "6905H",
      "LLAVE DE IMPACTO 1/2pul(12.7mm)2600 IMPAC",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/6905H_Llave-de-impacto.png",
    ],
    [
      "6906 (220V)",
      "LLAVE DE IMPACTO 19 MM (3/4pul)",
      "https://www.makita.com.ar/uploads/products/1561406195-11404.jpg",
    ],
    [
      "6922NB",
      "DEGOLLADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/6922NB_Degolladora.png",
    ],
    [
      "6924N",
      "DEGOLLADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/6924N_Degolladora.png",
    ],
    [
      "9005B",
      "ESMERILADORA ANGULAR 5pul(127mm)10000 rpm",
      "https://www.makita.com.mx/wp-content/uploads/2018/09/9005B-400x338.png",
    ],
    [
      "9227C",
      "PULIDORA-LIJADORA 7pul 600-300rpm",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/9227C_Lijadora_pulidora.jpg",
    ],
    [
      "9237C",
      "PULIDORA 180MM",
      "https://cdn.makitatools.com/apps/cms/img/923/0f308fc8-cc70-4097-bc12-e78cad344553_9237c_p_1500px.png",
    ],
    [
      "9554HNG",
      "ESMERILADORA ANGULAR 115mm (4-1/2pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/9554HNG_Esmeriladora_angular.jpg",
    ],
    [
      "9557HNG",
      "ESMERILADORA 115MM (4-1/2pul)",
      "https://www.makita.com.mx/wp-content/uploads/2021/04/makita-no-disponible-2.jpg",
    ],
    [
      "9557HNRG",
      "ESMERILADORA 115mm (4-1/2î)",
      "https://www.makita.com.ar/uploads/products/1561406195-61335.jpg",
    ],
    [
      "9557HPG",
      "ESMERILADORA ANGULAR 115MM 4-1/2pul",
      "https://www.makita.com.mx/wp-content/uploads/2021/04/makita-no-disponible-2.jpg",
    ],
    [
      "9557HPG (220V)",
      "ESMERILADORA ANGULAR 115MM 4-1/2pul (220V)",
      "https://www.makita.com.ar/uploads/products/1561406195-97110.jpg",
    ],
    [
      "9557HPYG",
      "ESMERILADORA DE DISCO 115MM 4-1/2pul",
      "https://www.makita.com.mx/wp-content/uploads/2021/04/makita-no-disponible-2.jpg",
    ],
    [
      "9564PC",
      "ESMERIL ANGULAR 115mm (DESC)",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/D-62343-a1000.jpg",
    ],
    [
      "9564PCV",
      "ESMERIL ANGULAR 115mm",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/9564PCV.png",
    ],
    [
      "9564PZ",
      "ESMERILADORA ANGULAR 4-1/2pul 115mm",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/D-62343-a1000.jpg",
    ],
    [
      "9924DB",
      "LIJADORA DE BANDA 3 X 24pul(76 X 609mm)",
      "https://cdn.makitatools.com/apps/cms/img/992/bd34b2ec-2446-4b09-907c-e791a1238082_9924db_p_1500px.png",
    ],
    [
      "AF353",
      "CLAVADORA PNEUMATICA 15 - 35 mm (5/8pul - 1-3/8pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/AF353_Clavadora_neumatica.png",
    ],
    [
      "AF505N",
      "CLAVADORA NEUMATICA",
      "https://www.makita.com.ar/uploads/products/1561406195-89654.jpg",
    ],
    [
      "AF506",
      "CLAVADORA PNEUMATICA",
      "https://cdn.makitatools.com/apps/cms/img/af5/fc4ce721-7a9b-4f74-81f6-ed4415d65559_af506_k_1500px.png",
    ],
    [
      "AF601",
      "CLAVADORA PNEUMATICA 25 - 64 mm (1pul - 2-1/2pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/AF601_Clavadora_neumatica.png",
    ],
    [
      "AF635",
      "CLAVADORA PNEUMATICA 32 - 64 mm (1-1/4pul - 2-1/2pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/AF635_Clavadora_Neumatica.png",
    ],
    [
      "AT1150A",
      "ENGRAPADORA PNEUMATICA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/AT1150A_Engrapador_de_corona_media.jpg",
    ],
    [
      "AT2550A",
      "ENGRAPADORA PNEUMATICA ANCHO DE CORONA 1pul(25mm)",
      "https://cdn.makitatools.com/apps/cms/img/at2/6dfc0ca6-14be-4e06-b706-68d722ab95e9_at2550a_p_1500px.png",
    ],
    [
      "AT638A",
      "ENGRAPADORA PNEUMATICA 13 - 38 mm (1/2pul - 1-1/2pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/AT638A_Clavadora_Neumatica.png",
    ],
    [
      "BAG4PF1842",
      "KIT BL1830B (4)+DC18RD+TOOL BAG+DGA454",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/BAG4PF1842-BAG4PT1832_Esmeriladora_Angular.png",
    ],
    [
      "BCF201Z",
      "VENTILADOR INALAMBRICO",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/BCF201Z.jpg",
    ],
    [
      "BHX2500",
      "SOPLADORA A GASOLINA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/BHX2500_Sopladora_a_gasolina.png",
    ],
    [
      "BO3710",
      "LIJADORA DE ACABADO",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/140440-1-b1000.jpg",
    ],
    [
      "BO4556",
      "LIJADORA DE ACABADO",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/BO4556_K_Lijadora_de_acabado.jpg",
    ],
    [
      "BO4556K",
      "LIJADORA DE ACABADOS ANTES BO4552K",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/BO4556_K_Lijadora_de_acabado.jpg",
    ],
    [
      "BO4557",
      "LIJADORA DE ACABADOS",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/BO4557_Lijadora_orbital.jpg",
    ],
    [
      "BO4565",
      "LIJADORA DE ACABADO 2A  14 000 R/MIN (TIPO DELTA)",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/BO4565_Lijadora_de_acabado.jpg",
    ],
    [
      "BO4566",
      "LIJADORA DE ACABADO 2A 14 000 R/MIN",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/BO4566_Lijadora_de_acabado.jpg",
    ],
    [
      "BO5030",
      "LIJADORA ORBITAL DE ACABADOS",
      "https://cdn.makitatools.com/apps/cms/img/bo5/fc5cd105-fed9-4d0e-8867-939267f04ede_bo5030_p_1500px.png",
    ],
    [
      "BO5041",
      "LIJADORA ORBITAL 5pul ANTES BO5021",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/140440-1-b1000.jpg",
    ],
    [
      "BO6050J",
      "LIJADORA ORBITAL 150mm (6î)",
      "https://cdn.makitatools.com/apps/cms/img/bo6/e2e807c8-d3f8-413d-a2bd-55d5b354e3c7_bo6050j_k_1500px.png",
    ],
    [
      "BTD043Z",
      "ATORNILLADOR DE IMPACTO INALAMBRICO",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/BTD043Z.png",
    ],
    [
      "BTD064Z",
      "ATORNILLADOR DE IMPACTO INALAMBRICO 14,4VCC LITIO ION †2 500",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/BTD064Z.png",
    ],
    [
      "BTD103Z",
      "ATORNILLADOR DE IMPACTO INALAMBRICO",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/BTD043Z.png",
    ],
    [
      "BTD104Z",
      "ATORNILLADOR DE IMPACTO INALAMBRICO 14,4VCC LITIO ION †2 300",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/BTD044Z.png",
    ],
    [
      "BTW073Z",
      "LLAVE DE IMPACTO INALAMBRICA (DESC)",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/BTW074Z.png",
    ],
    [
      "BTW074Z",
      "LLAVE DE IMPACTO INALAMBRICA 14,4VCC LITIO ION †2 700R/MIN",
      "https://www.makita.com.ar/uploads/products/1561406199-85503.jpg",
    ],
    [
      "BTW103Z",
      "LLAVE DE IMPACTO INALAMBRICA",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/BTW074Z.png",
    ],
    [
      "BUC122",
      "SIERRA DE CADENA INALAMBRICA 115MM 18V LI-ION (DESC)",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/1584766-d.jpg",
    ],
    [
      "BVF154RF",
      "ASPESOR DE USO AGRICOLA 18V LI-ION (DESC)",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/DVF154_Fumigadora_de_jardin_inalambrica.png",
    ],
    [
      "CA5000XJ",
      "CORTADORA MULTIFUNCION ALUMINIO/MADERA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/CA5000_Sierra_para_panel_de_aluminio_compuesto.jpg",
    ],
    [
      "CC301DWYE",
      "CORTADORA INALAMBRICA 85mm (3-3/8pul) CXT (12V max) Li-Ion",
      "https://www.makita.com.ar/uploads/products/1561406199-97387.jpg",
    ],
    [
      "CF100DZ",
      "VENTILADOR INALAMBRICO CXT 12V Litio-Ion",
      "https://cdn.makitatools.com/apps/cms/img/cf1/79415023-e14c-4b44-8e22-2a16489126a9_cf100dz_p_1500px.png",
    ],
    [
      "CG100DWAEA",
      "PISTOLA INALAMBRICA P/APLICACION DE SELLADOR CXT 12 V Litio-",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/CG100DWAEA.png",
    ],
    [
      "CG100DZA",
      "PISTOLA INALAMBRICA P/APLICACION DE SELLADOR CXT 12 V Litio-",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/CG100DZA.jpg",
    ],
    [
      "CL104DWYP",
      "ASPIRADORA INALAMBRICA 12VCC LITIO ION",
      "https://www.makita.com.ar/uploads/products/1562758425-67460.jpg",
    ],
    [
      "CL106FDZ",
      "ASPIRADORA INALAMBRICA 12VCC",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/CL106FDZ.png",
    ],
    [
      "CL121DWA",
      "ASPIRADORA INALAMBRICA 12Vcc Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/CL121DWA.png",
    ],
    [
      "CL121DZ",
      "ASPIRADORA INALAMBRICA 12Vcc Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/CL121DZ.jpg",
    ],
    [
      "CP100DWY",
      "MULTI-CORTADOR INALAMBRICO CXT 12V Litio-Ion",
      "https://www.makita.com.ar/uploads/products/1611692671-56621.png",
    ],
    [
      "CP100DZ",
      "MULTI-CORTADOR INALAMBRICO CXT 12V Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/CP100DZ.jpg",
    ],
    [
      "CV101DZM",
      "CHALECO ELECTRO-TERMICO (T-MEDIANA) 12VCC Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/CV101DZM.jpg",
    ],
    [
      "CV101DZXL",
      "CHALECO ELECTRO-TERMICO (T-EXTRA GRANDE) 12VCC Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/CV101DZXL.jpg",
    ],
    [
      "CX200RB",
      "COMBO KIT LXT BRUSHLESS 18V",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/CX200RB_Combo_rotomartillo_atornillador.png",
    ],
    [
      "DA3010F",
      "TALADRO ANGULAR 10mm C/FOCO",
      "https://cdn.makitatools.com/apps/cms/img/da3/a1a106e5-4663-4253-bc73-4017c4800a39_da3010f_p_1500px.png",
    ],
    [
      "DA333DWAE",
      "TALADRO ANGULAR 10MM CXT 12V Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DA333DWAE.png",
    ],
    [
      "DBN500Z",
      "CLAVADORA PNEUMATICA A BATERIA 15-50 mm (5/8-2pul)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DBN500Z.jpg",
    ],
    [
      "DBN600Z",
      "CLAVADORA PNEUMATICA A BATERIA 16 Ga 64mm (2-1/2pul)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DBN600Z.jpg",
    ],
    [
      "DBO180Z",
      "LIJADORA ORBITAL 125mm LXT Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/04/DBO180_Lijadora_orbital_inalambrica-400x338.png",
    ],
    [
      "DCF102Z",
      "VENTILADOR INALAMBRICO 14.4V-18V LI-ION",
      "https://cdn.makitatools.com/apps/cms/img/dcf/894b75e0-54c2-418e-ba10-b03fd013fbd7_dcf102z_p_1500px.png",
    ],
    [
      "DCF300Z",
      "VENTILADOR INALAMBRICO 14,4/18VCC LI-ION",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DCF300Z.png",
    ],
    [
      "DCG180Z",
      "PISTOLA INALAMBRICA P/APLICACION DE SELLADOR LXT 18V Li-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DCG180Z.jpg",
    ],
    [
      "DCJ201Z2XL",
      "CHAMARRA ELECTRO-TERMICA 18VCC LI-ION (CAMUFLAJE)",
      "https://cdn.makitatools.com/apps/cms/img/dcj/d2f15569-a1e3-4fa4-95b1-9b429b71a375_dcj201z2xl_p_1500px.png",
    ],
    [
      "DCL180Z",
      "ASPIRADORA INALAMBRICA LXT 18V Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2018/08/DCL180ZB-400x338.png",
    ],
    [
      "DCL180ZB",
      "ASPIRADORA INALAMBRICA 18V",
      "https://www.makita.com.mx/wp-content/uploads/2018/08/DCL180ZB-400x338.png",
    ],
    [
      "DCL180ZB",
      "ASPIRADORA INALAMBRICA 18V",
      "https://www.makita.com.mx/wp-content/uploads/2018/08/DCL180ZB-400x338.png",
    ],
    [
      "DCL501Z",
      "ASPIRADORA CICLON INALAMBRICA 18V LXT Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2018/07/DCL501_Aspiradora_Inalambrica-400x338.png",
    ],
    [
      "DCM501Z",
      "CAFETERA INALAMBRICA, 18V",
      "https://cdn.makitatools.com/apps/cms/img/dcm/e7cb93bc-895d-4d33-9b37-5914c9abce91_dcm501z_p_1500px.png",
    ],
    [
      "DCO180Z",
      "RECORTADORA INALAMBRICA",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DCO180Z.jpg",
    ],
    [
      "DCS551RMJ",
      "SIERRA PARA METAL INALAMBRICA† 18VCC† 150MM (5-7/8î)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DCS551RMJ.jpg",
    ],
    [
      "DCS730128",
      "MOTOSIERRA 72,6cc/28pul",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/DCS730128_Motosierra-400x338.png",
    ],
    [
      "DCS790128",
      "MOTOSIERRA 28pul",
      "https://www.makita.com.mx/wp-content/uploads/2021/04/makita-no-disponible-2.jpg",
    ],
    [
      "DCS901030",
      "MOTOSIERRA 90cc/30pul",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/DCS9010_Motosierra-400x338.png",
    ],
    [
      "DCU180Z",
      "CARRO INALAMBRICO PARA JARDIN",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DCU180Z.jpg",
    ],
    [
      "DDA351Z",
      "ATORNILLADOR ANGULAR 10MM 18V LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DDA351Z_Taladro_inalambrico.png",
    ],
    [
      "DDA460PT2",
      "ATORNILLADOR ANGULAR INALAMBRICO 18V Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/03/DDA460_taladro_angular_inalambrico.jpg",
    ],
    [
      "DDA460Z",
      "ATORNILLADOR ANGULAR INALAMBRICO 18V Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/03/DDA460_taladro_angular_inalambrico.jpg",
    ],
    [
      "DDF083Z",
      "ATORNILLADOR TALADRO INALAMBRICO 18VCC LITIO ION",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DDF083Z.png",
    ],
    [
      "DDF453SYE",
      "ATORNILLADOR TALADRO INAL¡MBRICO 13MM (1/2î) 18V Litio-ion",
      "https://www.makita.com.ar/uploads/products/1561406200-86872.jpg",
    ],
    [
      "DDF458RF3J",
      "ATORNILLADOR TALADRO INALAMBRICO 18VCC†(DESC)",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DDF458_Taladro_Atornillador.png",
    ],
    [
      "DDF458RFJ",
      "ATORNILLADOR TALADRO INALAMBRICO 18VCC†",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DDF458_Taladro_Atornillador.png",
    ],
    [
      "DDF458RMJ",
      "ATORNILLADOR  TALADRO INAL¡MBRICO 18VCC",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DDF458_Taladro_Atornillador.png",
    ],
    [
      "DDF458SYJ",
      "ATORNILLADOR TALADRO INALAMBRICO 18VCC LITIO ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DDF458_Taladro_Atornillador.png",
    ],
    [
      "DDF458Z",
      "ATORNILLADOR TALADRO INALAMBRICO 18VCC†",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DDF458Z.jpg",
    ],
    [
      "DDF481Z",
      "ATORNILLADOR TALADRO INALAMBRICO 18VCC LITIO ION 0-2100 R/MI",
      "https://www.makita.com.ar/uploads/products/1561406200-84640.jpg",
    ],
    [
      "DDF482Z",
      "ATORNILLADOR TALADRO INALAMBRICO 18VCC LITIO ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DDF482Z.jpg",
    ],
    [
      "DDF483Z",
      "ATORNILLADOR TALADRO INALAMBRICO 18VCC LITIO ION",
      "https://www.makita.com.ar/uploads/products/1643054816-60676.png",
    ],
    [
      "DDF484RFE",
      "ATORNILLADOR TALADRO INALAMBRICO 13MM (1/2pul) 18VCC LITIO ION",
      "https://www.makita.com.ar/uploads/products/1561406201-59606.jpg",
    ],
    [
      "DF001DW",
      "ATORNILLADOR INALAMBRICO 3.6V LITIO ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/DF001D_Atornillador_inalabrico-400x338.png",
    ],
    [
      "DF012DSE",
      "ATORNILLADOR INALAMBRICO",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/DF012DSE_Atornillador_Inalambrico.png",
    ],
    [
      "DF032DZ",
      "ATORNILLADOR TALADRO INALAMBRICO CXT  10,8Vcc-12Vcc",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DF032DZ.jpg",
    ],
    [
      "DF332DZ",
      "ATORNILLADOR TALADRO INALAMBRICO CXT 10,8Vcc-12Vcc",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DF332DZ.jpg",
    ],
    [
      "DF333DZ",
      "ATORNILLADOR TALADRO INALAMBRICO 10,8Vcc-12Vcc",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DF333DZ.jpg",
    ],
    [
      "DFJ214Z2XL",
      "CHAMARRA ELECTRO-VENTILADA INALAMBRICA Litio-ion",
      "https://cdn.makitatools.com/apps/cms/img/dfj/9a81fe8d-d4bb-4058-9fd7-ee80b05df082_dfj214z_p_1500px.png",
    ],
    [
      "DFJ214Z3XL",
      "CHAMARRA ELECTRO-VENTILADA INALAMBRICA Litio-ion",
      "https://cdn.makitatools.com/apps/cms/img/dfj/9a81fe8d-d4bb-4058-9fd7-ee80b05df082_dfj214z_p_1500px.png",
    ],
    [
      "DFJ214ZL",
      "CHAMARRA ELECTRO-VENTILADA INALAMBRICA Litio-ion",
      "https://cdn.makitatools.com/apps/cms/img/dfj/9a81fe8d-d4bb-4058-9fd7-ee80b05df082_dfj214z_p_1500px.png",
    ],
    [
      "DFJ214ZM",
      "CHAMARRA ELECTRO-VENTILADA INALAMBRICA Litio-ion",
      "https://cdn.makitatools.com/apps/cms/img/dfj/9a81fe8d-d4bb-4058-9fd7-ee80b05df082_dfj214z_p_1500px.png",
    ],
    [
      "DFJ214ZS",
      "CHAMARRA ELECTRO-VENTILADA INALAMBRICA Litio-ion",
      "https://cdn.makitatools.com/apps/cms/img/dfj/9a81fe8d-d4bb-4058-9fd7-ee80b05df082_dfj214z_p_1500px.png",
    ],
    [
      "DFJ214ZXL",
      "CHAMARRA ELECTRO-VENTILADA INALAMBRICA Litio-ion",
      "https://cdn.makitatools.com/apps/cms/img/dfj/9a81fe8d-d4bb-4058-9fd7-ee80b05df082_dfj214z_p_1500px.png",
    ],
    [
      "DFJ305ZM",
      "CHAMARRA ELECTRO-VENTILADA INALAMBRICA Litio-ion",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/Chamarra_Ventilador_DFJ305Z.jpg",
    ],
    [
      "DFJ407ZXL",
      "CHAMARRA ELECTRO-VENTILADA INALAMBRICA Litio-ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DFJ407ZXL.jpg",
    ],
    [
      "DFL082FZ",
      "ATORNILLADOR ANGULAR",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/BFL082FZ.png",
    ],
    [
      "DFL083FZ",
      "ATORNILLADOR ANGULAR INALAMBRICO Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DFL083FZ.png",
    ],
    [
      "DFL122FZ",
      "ATORNILLADOR ANGULAR INALAMBRICO",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/BFL122FZ.png",
    ],
    [
      "DFL125FZ",
      "ATORNILLADOR ANGULAR INALAMBRICO Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DFL125FZ.png",
    ],
    [
      "DFL202FZ",
      "ATORNILLADOR ANGULAR 14.4 V",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/BFL202FZ.png",
    ],
    [
      "DFL204FZ",
      "ATORNILLADOR ANGULAR INALAMBRICO Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DFL204FZ.png",
    ],
    [
      "DFL300FZ",
      "ATORNILLADOR ANGULAR INALAMBRICO",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/BFL300FZ.png",
    ],
    [
      "DFL302FZ",
      "ATORNILLADOR ANGULAR INALAMBRICO Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DFL302FZ.png",
    ],
    [
      "DFL400FZ",
      "ATORNILLADOR ANGULAR INALAMBRICO",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/BFL400FZ.png",
    ],
    [
      "DFL403FZ",
      "ATORNILLADOR ANGULAR INALAMBRICO Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DFL403FZ.png",
    ],
    [
      "DFL651FZ",
      "ATORNILLADOR ANGULAR INALAMBRICO",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DFL651FZ.png",
    ],
    [
      "DFS250RFE",
      "ATORNILLADOR DE IMPACTO INALAMBRICO LXT 18V Li-Ion 2500rpm",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DFS250_Atornillador_Inalambrico.png",
    ],
    [
      "DFS250RTE",
      "ATORNILLADOR DE IMPACTO INALAMBRICO LXT 18V Li-Ion 2500rpm",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DFS250_Atornillador_Inalambrico.png",
    ],
    [
      "DFS251RFE",
      "ATORNILLADOR INALAMBRICO LXT 18V Litio-Ion 2500rpm",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DFS251_Atornillador_inalambrico.png",
    ],
    [
      "DFS251RTE",
      "ATORNILLADOR INALAMBRICO LXT 18V Litio-Ion 2500rpm",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DFS251_Atornillador_inalambrico.png",
    ],
    [
      "DFT023FMZ",
      "ATORNILLADOR DE IMPACTO INALAMBRICO C/CABLE USB 6.35 mm 1/4",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DFT023FMZ.png",
    ],
    [
      "DFT044FZ",
      "ATORNILLADOR INALAMBRICO (DESC)",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/BFT022FZ.png",
    ],
    [
      "DFT045FMZ",
      "CORDLESS SCREWDRIVER",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DFT045FMZ.png",
    ],
    [
      "DFT082RZ",
      "ATORNILLADOR INALAMBRICO 14.4V LI-ION",
      "https://www.makita.com.ar/uploads/products/1561406203-38890.jpg",
    ],
    [
      "DFT085FMZ",
      "CORDLESS SCREWDRIVER WITH USB CABLE",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DFT085FMZ.png",
    ],
    [
      "DFT124RZ",
      "ATORNILLADOR INALAMBRICO 14.4V LI-ION",
      "https://www.makita.com.ar/uploads/products/1561406204-11377.jpg",
    ],
    [
      "DFT127FMZ",
      "ATONILLADOR INALAMBRICO C/CABLE USB 6.35 mm (1/4pul)",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DFT127FMZ.png",
    ],
    [
      "DGA452RMJ",
      "ESMERILADORA INAL¡MBRICA 18VCC",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DGA452_Esmeriladora_angular_inalambrica.png",
    ],
    [
      "DGA456RFE",
      "ESMERILADORA INALAMBRICA 115MM (4-1/2î) 8500R/MIN LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DGA456_Esmeriladora_angular_inalambrica.png",
    ],
    [
      "DGA456RTE",
      "ESMERILADORA INALAMBRICA 115MM (4-1/2î) 8500R/MIN LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DGA456_Esmeriladora_angular_inalambrica.png",
    ],
    [
      "DGA456Z",
      "ESMERILADORA INALAMBRICA 115MM (4-1/2î) 8500R/MIN LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DGA456_Esmeriladora_angular_inalambrica.png",
    ],
    [
      "DGA461Z",
      "MINIESMERIL INALAMBRICO 115MM 4-1/2pul LXT Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DGA461Z.jpg",
    ],
    [
      "DGA463RTJ",
      "MINIESMERIL INALAMBRICO 115MM 4-1/2pul LXT Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DGA463RTJ.jpg",
    ],
    [
      "DGA463Z",
      "MINIESMERIL INALAMBRICO 115MM 4-1/2pul LXT Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DGA463Z.jpg",
    ],
    [
      "DGA467RTJ",
      "MINIESMERIL INALAMBRICO 115MM 4-1/2pul LXT Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DGA467RTJ.png",
    ],
    [
      "DGA467Z",
      "MINIESMERIL INALAMBRICO 115MM 4-1/2pul LXT Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DGA467Z.jpg",
    ],
    [
      "DGA700PT2",
      "ESMERILADORA ANGULAR INALAMBRICA 7pul (177,8mm) LXT 18V X2 Lit",
      "https://www.makita.com.mx/wp-content/uploads/2019/09/DGA700_Esmeriladora_Angular_Inalambrica.jpg",
    ],
    [
      "DGA700Z",
      "ESMERILADORA ANGULAR INALAMBRICA 7pul (177,8mm) LXT 18V X2 Lit",
      "https://www.makita.com.mx/wp-content/uploads/2019/09/DGA700_Esmeriladora_Angular_Inalambrica.jpg",
    ],
    [
      "DGA900PT2",
      "ESMERILADORA ANGULAR INALAMBRICA 9pul (230mm) LXT 18VX2 Li-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/09/DGA900_Esmeriladora_Angular_Inalambrica.jpg",
    ],
    [
      "DGA900Z",
      "ESMERILADORA ANGULAR INALAMBRICA 9pul (230mm) LXT 18VX2 Li-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/09/DGA900_Esmeriladora_Angular_Inalambrica.jpg",
    ],
    [
      "DHP453SYE",
      "ROTOMARTILLO ATORNILLADOR INAL¡MBRICO 18VCC",
      "https://www.makita.com.ar/uploads/products/1561406205-42039.jpg",
    ],
    [
      "DHP458RFJ",
      "ROTOMARTILLO ATORNILLADOR INALAMBRICO 18VCC LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DHP458_Rotomartillo_Taladro_Inalambrico.png",
    ],
    [
      "DHP458RMJ",
      "ROTOMARTILLO ATORNILLADOR INALAMBRICO 18VCC LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DHP458_Rotomartillo_Taladro_Inalambrico.png",
    ],
    [
      "DHP458SYJ",
      "ROTOMARTILLO ATORNILLADOR INALAMBRICO 18VCC LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DHP458_Rotomartillo_Taladro_Inalambrico.png",
    ],
    [
      "DHP458Z",
      "ROTOMARTILLO ATORNILLADOR INALAMBRICO 18VCC LI-ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DHP458Z.jpg",
    ],
    [
      "DHP480Z",
      "ROTOMARTILLO ATORNILLADOR INALAMBRICO 13MM (1/2î) 18VCC LITI",
      "https://www.makita.com.ar/uploads/products/1561406206-85937.jpg",
    ],
    [
      "DHP481Z",
      "ROTOMARTILLO ATORNILLADOR INALAMBRICO 18VCC LITIO ION 0-2100",
      "https://www.makita.com.ar/uploads/products/1561406206-21221.jpg",
    ],
    [
      "DHP482Z",
      "ROTOMARTILLO ATORNILLADOR INALAMBRICO 18VCC LITIO ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DHP482Z.jpg",
    ],
    [
      "DHP483RFE",
      "ROTOMARTILLO ATORNILLADOR INALAMBRICO 18VCC LI-ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DHP483RFE.jpg",
    ],
    [
      "DHP483RTE",
      "ROTOMARTILLO ATORNILLADOR INALAMBRICO 18VCC LI-ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DHP483RTE.jpg",
    ],
    [
      "DHP483Z",
      "ROTOMARTILLO ATORNILLADOR INALAMBRICO 18VCC LI-ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DHP483Z.jpg",
    ],
    [
      "DHP484RFE",
      "ROTOMARTILLO TALADRO ATORNILLADOR INALAMBRICO 18V Litio Ion",
      "https://www.makita.com.ar/uploads/products/1561406207-14398.jpg",
    ],
    [
      "DHP484Z",
      "ROTOMARTILLO ATORNILLADOR INALAMBRICO 18VCC LITIO ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DHP484Z.jpg",
    ],
    [
      "DHR171RTJ",
      "MARTILLO ROTATIVO INALAMBRICO 17mm(11/16)LXT 18VCC Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DHR171RTJ.jpg",
    ],
    [
      "DHR171Z",
      "MARTILLO ROTATIVO INALAMBRICO 17mm(11/16)LXT 18VCC Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DHR171Z.jpg",
    ],
    [
      "DHR241Z",
      "MARTILLO ROTATIVO INAL¡MBRICO 18VCC",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DHR241Z.png",
    ],
    [
      "DHR242RFE",
      "MARTILLO ROTATIVO COMBINADO INAL¡MBRICO 24MM (15/16î) 18VCC",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DHR242_Martillo_rotatorio_combinado_inalambrico.png",
    ],
    [
      "DHR263PM2J",
      "MARTILLO ROTATIVO COMBINADO INALAMBRICO 26MM 18VX2 LITIO-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/09/DHR263_Martillo_rotatorio_combinado-400x338.png",
    ],
    [
      "DHR280ZWJ",
      "MARTILLO ROTATIVO COMBINADO INALAMBRICO 28mm LXT Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/09/DHR280_Rotomartillo_electro-neumatico_inalambrico.jpg",
    ],
    [
      "DHR282PT2JU",
      "MARTILLO ROTATIVO COMBINADO INALAMBRICO 28mm LXT Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/DHR282_Rotomartillo_electro-neumatico_inalambrico.jpg",
    ],
    [
      "DHS680RMJ",
      "SIERRA CIRCULAR INALAMBRICA 165MM (6-1/2î) LXT 18VCC LI-ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DHS680RMJ.jpg",
    ],
    [
      "DHS680Z",
      "SIERRA CIRCULAR INALAMBRICA 165MM (6-1/2î) LXT 18VCC Li-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DHS680Z.jpg",
    ],
    [
      "DHS783ZU",
      "SIERRA CIRCULAR INALAMBRICA",
      "https://www.makita.com.mx/wp-content/uploads/2019/09/DHS783_Sierra_circular.jpg",
    ],
    [
      "DJN161Z",
      "ROEDORA INALAMBRICA 18V Litio Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DJN161Z.jpg",
    ],
    [
      "DJR186Z",
      "SIERRA RECIPROCA INALAMBRICA 18Vcc Litio Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DJR186Z.jpg",
    ],
    [
      "DJR188RFJ",
      "SIERRA RECIPROCA INALAMBRICA 18Vcc Litio-Ion",
      "https://www.makita.com.ar/uploads/products/1561406208-99035.jpg",
    ],
    [
      "DJR188Z",
      "SIERRA RECIPROCA INALAMBRICA 18Vcc Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DJR188Z.jpg",
    ],
    [
      "DJR360Z",
      "SIERRA RECIPROCA INALAMBRICA 18V X2 LITIO-ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DJR360Z.jpg",
    ],
    [
      "DJV182Z",
      "SIERRA CALADORA INALAMBRICA 18V Litio Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DJV182Z.jpg",
    ],
    [
      "DKP180Z",
      "CEPILLO INALAMBRICO 18V Litio-Ion (ANTES XPK01Z)",
      "https://www.makita.com.mx/wp-content/uploads/2019/04/DKP180_Cepillo_inalambrico.png",
    ],
    [
      "DLM460Z",
      "CORTADORA DE CESPED 460MM",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DLM460Z.jpg",
    ],
    [
      "DLS111PT2U",
      "SIERRA DE INGLETE INALAMBRICA LXT 18VX2 Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DLS111_Sierra_telescopica_inalambrica.png",
    ],
    [
      "DLS111ZU",
      "SIERRA DE INGLETE INALAMBRICA LXT 18VX2 Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DLS111ZU.jpg",
    ],
    [
      "DLS211PT2",
      "SIERRA DE INGLETE INALAMBRICA LXT 18VX2 Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/09/DLS211_sierra_inglete.jpg",
    ],
    [
      "DLS211PT2U",
      "SIERRA DE INGLETE INALAMBRICA LXT 18VX2 Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/09/DLS211_sierra_inglete.jpg",
    ],
    [
      "DLS211ZU",
      "SIERRA DE INGLETE INALAMBRICA LXT 18VX2 Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DLS211ZU.jpg",
    ],
    [
      "DLS600Z",
      "SIERRA DE INGLETE INALAMBRICA (165MM) 18V LXT Litio-Ion Brus",
      "https://www.makita.com.mx/wp-content/uploads/2018/02/DLS600_sierra_telescopica_inalambrica.png",
    ],
    [
      "DLX2094PMJ",
      "COMBO DHR263+DDF456+BL1840X4+DC18RD",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DLX2094PMJ_Combo_Martillo_Atornillador.png",
    ],
    [
      "DLX2131SY",
      "COMBO DHP482Z+DTD152Z+DC18SD+BL1815N(2)+BIT+TOOL BAG",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/DLX2131SY-_Combo.png",
    ],
    [
      "DLX2137M",
      "COMBO DHP482+DHR263+BL1840B(3)+DC18RC+BOLSA NYLON",
      "https://www.makita.com.mx/wp-content/uploads/2019/10/DLX2137M_Combo-Rotomartillo-.jpg",
    ],
    [
      "DLX2147M",
      "COMBO DHR263+DTD152+DC18RC+BL1840B(X3)+TOOL BAG",
      "https://www.makita.com.mx/wp-content/uploads/2019/10/DLX2147M_Combo.jpg",
    ],
    [
      "DLX2164X",
      "COMBO KIT 18V DGA454+DHR242+DC18RC+BL1830X2",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/DLX2164X_Combo.png",
    ],
    [
      "DLX2176T",
      "COMBO DHP481+DTD154+DC18RC+BL1850B(2)+MALETIN",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/DLX2176T_Combo.png",
    ],
    [
      "DP2010",
      "TALADRO DE ALTA VELOCIDAD† 4 200R/MIN 6,5MM (1/4î)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DP2010.jpg",
    ],
    [
      "DP4010",
      "TALADRO 2 VEL. 13MM",
      "https://www.makita.com.ar/uploads/products/1561990264-32528.jpg",
    ],
    [
      "DP4011",
      "TALADRO 2VEL. 13MM",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DP4011.jpg",
    ],
    [
      "DPB180Z",
      "SIERRA DE BANDA PORTATIL INALAMBRICA 18Vcc LITIO-ION",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DPB180Z.png",
    ],
    [
      "DPB182RTE",
      "SIERRA DE BANDA PORTATIL INALAMBRICA 18V Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DPB182RTE.png",
    ],
    [
      "DPB182Z",
      "SIERRA DE BANDA PORTATIL INALAMBRICA 18V Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DPB182Z.jpg",
    ],
    [
      "DPC7331",
      "TROZADORA P/CONCRETO 14pul A GASOLINA",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DPC7331_Cortadora_a_gasolina.png",
    ],
    [
      "DPJ180Z",
      "ENGALLETADORA INALAMBRICA 18V Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/04/DPJ180_Engalletadora_inalambrica.png",
    ],
    [
      "DPO500Z",
      "PULIDORA ORBITAL INALAMBRICA 0-6800 min LXT Litio Ion",
      "https://www.makita.com.ar/uploads/products/1637969864-35230.jpg",
    ],
    [
      "DPT353Z",
      "CLAVADORA INALAMBRICA 18V Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DPT353Z.jpg",
    ],
    [
      "DRC200Z",
      "ROBOT LIMPIADOR 18V X2",
      "https://cdn.makitatools.com/apps/cms/img/drc/57121458-3f72-4147-88c0-96c493fd6345_drc200z_p_1500px.png",
    ],
    [
      "DRS780Z",
      "SIERRA CIRCULAR INALAMBRICA 185MM 18V X2 Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DRS780Z.png",
    ],
    [
      "DRT50Z",
      "RECORTADORA INALAMBRICA LXT 18V Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DRT50Z.jpg",
    ],
    [
      "DRV150Z",
      "REMACHADORA INALAMBRICA 18V LXT 4.8mm (3/16)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DRV150Z.jpg",
    ],
    [
      "DS4012",
      "TALADRO 13MM",
      "https://cdn.makitatools.com/apps/cms/img/ds4/64561ea2-2abf-4a33-a074-c5c42ca8f3de_ds4012_p_1500px.png",
    ],
    [
      "DS5000",
      "TALADRO 16 mm",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DS5000_Taladro.png",
    ],
    [
      "DSD180Z",
      "SIERRA INALAMBRICA PARA TABLAROCA",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DSD180Z.jpg",
    ],
    [
      "DSL800ZU",
      "LIJADORA INALAMBRICA PARA TABLAROCA 18V Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DSL800ZU.jpg",
    ],
    [
      "DSP600Z",
      "SIERRA CIRCULAR INMERSION INALAMBRICA 165 MM (6-1/2î) LXT",
      "https://www.makita.com.ar/uploads/products/1561406211-41638.jpg",
    ],
    [
      "DSS501Z",
      "SIERRA CIRCULAR INALAMBRICA 18V Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DSS501Z.png",
    ],
    [
      "DSS611RFE",
      "SIERRA CIRCULAR INALAMBRICA 18V Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/03/DSS611_Sierra_circula_inalambrica.png",
    ],
    [
      "DSS611Z",
      "SIERRA CIRCULAR INALAMBRICA 18V Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/03/DSS611_Sierra_circula_inalambrica.png",
    ],
    [
      "DT04Z",
      "ATORNILLADOR TALADRO INALAMBRICO CXT 12Vcc Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DT04Z_Atornillador-Inalambrico.png",
    ],
    [
      "DTD152Z",
      "ATORNILLADOR DE IMPACTO INALAMBRICO 18VCC LITIO ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DTD152Z.jpg",
    ],
    [
      "DTD153RFE",
      "ATORNILLADOR DE IMPACTO INALAMBRICO 18VCC",
      "https://www.makita.com.ar/uploads/products/1561406212-66051.jpg",
    ],
    [
      "DTD153Z",
      "ATORNILLADOR DE IMPACTO INALAMBRICO 18VCC LI-ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DTD153Z.jpg",
    ],
    [
      "DTD154RFE",
      "ATORNILLADOR DE IMPACTO INALAMBRICO 18VCC",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DTD154_Atornillador_Inalambrico.png",
    ],
    [
      "DTD154RTE",
      "ATORNILLADOR DE IMPACTO INALAMBRICO 18VCC",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DTD154_Atornillador_Inalambrico.png",
    ],
    [
      "DTD154Z",
      "ATORNILLADOR DE IMPACTO INALAMBRICO 18VCC",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DTD154_Atornillador_Inalambrico.png",
    ],
    [
      "DTD155Z",
      "ATORNILLADOR DE IMPACTO LXT INALAMBRICO 18Vcc Litio-Ion",
      "https://www.makita.com.ar/uploads/products/1561406213-86754.jpg",
    ],
    [
      "DTL061Z",
      "ATORNILLADOR ANGULAR INALAMBRICO 18V LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DTL061Z_Atornilladora-de-impacto-angular.png",
    ],
    [
      "DTM50Z",
      "MULTIHERRAMIENTA INAL¡MBRICO 18VCC",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DTM50Z.png",
    ],
    [
      "DTS141Z",
      "ATORNILLADOR INALAMBRICO DE IMPULSO HIDRAULICO LXT Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DTS141Z.jpg",
    ],
    [
      "DTW1001RTJ",
      "LLAVE DE IMPACTO INALAMBRICA 18V Li-ion 19mm (3/4pul)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DTW1001RTJ.jpg",
    ],
    [
      "DTW1001Z",
      "LLAVE DE IMPACTO INALAMBRICA 18V Li-ion 19mm (3/4pul)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DTW1001Z.jpg",
    ],
    [
      "DTW1002RTJ",
      "LLAVE DE IMPACTO INALAMBRICA 18V Li-ion 12.7 (1/2pul)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DTW1002RTJ.jpg",
    ],
    [
      "DTW1002Z",
      "LLAVE DE IMPACTO INALAMBRICA 18V Li-ion 12.7 (1/2pul)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DTW1002Z.jpg",
    ],
    [
      "DTW180RFE",
      "LLAVE DE IMPACTO INALAMBRICA",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DTW180RFE.jpg",
    ],
    [
      "DTW180Z",
      "LLAVE DE IMPACTO INALAMBRICA",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DTW180Z.jpg",
    ],
    [
      "DTW181Z",
      "LLAVE DE IMPACTO INALAMBRICA 18V Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DTW181Z.jpg",
    ],
    [
      "DTW190RTE",
      "LLAVE DE IMPACTO INALAMBRICA",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DTW190RTE.jpg",
    ],
    [
      "DTW251RFE",
      "LLAVE DE IMPACTO 18Vcc LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DTW251_Llave_de_impacto_inalambrica.png",
    ],
    [
      "DTW251Z",
      "LLAVE DE IMPACTO 18Vcc LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DTW251_Llave_de_impacto_inalambrica.png",
    ],
    [
      "DTW253RFE",
      "LLAVE DE  IMPACTO INALAMBRICA",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DTW253_Llave_de_impacto_inalambrica.png",
    ],
    [
      "DTW253Z",
      "LLAVE DE IMPACTO INALAMBRICA 18V LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DTW253_Llave_de_impacto_inalambrica.png",
    ],
    [
      "DTW285Z",
      "LLAVE DE IMPACTO INALAMBRICA 18VCC LITIO ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DTW285Z.jpg",
    ],
    [
      "DTW450RMJ",
      "LLAVE DE IMPACTO INALAMBRICO 18V LI-ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DTW450RMJ.jpg",
    ],
    [
      "DTW450Z",
      "LLAVE DE IMPACTO INALAMBRICO 18V LI-ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DTW450Z.jpg",
    ],
    [
      "DUB182Z",
      "SOPLADORA INALAMBRICA 18V LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/DUB182Z_Aspiradora-Sopladora-inalambrica.jpg",
    ],
    [
      "DUB183Z",
      "SOPLADORA INALAMBRICA 18V Litio Ion",
      "https://www.makita.com.ar/uploads/products/1611610595-38173.png",
    ],
    [
      "DUB184Z/M",
      "SOPLADORA INALAMBRICA Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DUB184Z.png",
    ],
    [
      "DUB361Z",
      "SOPLADORA INALAMBRICA 36VCC 4,4M3/MIN",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DUB361Z.jpg",
    ],
    [
      "DUB362Z",
      "SOPLADORA INALAMBRICA",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DUB362Z.jpg",
    ],
    [
      "DUC254Z",
      "SIERRA DE CADENA INALAMBRICA 250mm 10pul 18V",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DUC254Z.jpg",
    ],
    [
      "DUC405Z",
      "ELECTROSIERRA INALAMBRICA 400mm (16pul) LXT 18VCC Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DUC405Z.png",
    ],
    [
      "DUC406Z",
      "ELECTROSIERRA INALAMBRICA Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DUC406Z.jpg",
    ],
    [
      "DUH651Z",
      "CORTA SETOS INALAMBRICO 36VCC",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DUH651Z.jpg",
    ],
    [
      "DUM604Z",
      "PODADORA INALAMBRICA 160MM",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DUM604Z.jpg",
    ],
    [
      "DUR184LZ",
      "DESBROZADORA INALAMBRICA LXT BL 18 Vcc Litio-Ion",
      "https://www.makita.com.ar/uploads/products/1561990370-39091.jpg",
    ],
    [
      "DUR187UZ",
      "DESBROZADORA INALAMBRICA 18Vcc Litio Ion",
      "https://www.makita.com.ar/uploads/products/1561406218-99216.jpg",
    ],
    [
      "DUR189Z",
      "DESBROZADORA INALAMBRICA Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DUR189Z.jpg",
    ],
    [
      "DUX60Z",
      "HERRAMIENTA INALAMBRICA MULTIFUNCIONAL (18Vcc X 2) Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DUX60Z.jpg",
    ],
    [
      "DVC150LZ",
      "ASPIRADORA INALAMBRICA",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DVC150LZ.jpg",
    ],
    [
      "DVC261ZX11",
      "ASPIRADORA INALAMBRICA TIPO MOCHILA 36V Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/DVC261ZX11.png",
    ],
    [
      "DVC350Z",
      "ASPIRADORA INALAMBRICA 18V LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/DVC350Z_Aspiradora-inalambrica.jpg",
    ],
    [
      "DVC750LZ",
      "ASPIRADORA INALAMBRICA 18V Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DVC750LZ.jpg",
    ],
    [
      "DVC860LZ",
      "ASPIRADORA ALAMBRICA / INALAMBRICA",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DVC860LZ.jpg",
    ],
    [
      "DVC864LZ",
      "ASPIRADORA INALAMBRICA LXT 18V X2 Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/DVC864LZ.jpg",
    ],
    [
      "DVP180Z",
      "BOMBA DE VACIO 18V LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DVP180_Bomba_de_vacio.png",
    ],
    [
      "DVR850RFE",
      "VIBRADOR INALAMBRICO 18V LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/DVR850_Vibrador_de_concreto_inalambrico.png",
    ],
    [
      "DWT310PT2",
      "DEGOLLADORA INALAMBRICA 5/8pul,3/4pul,7/8pul 18V X 2 Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/09/DWT310_Degolladora_inalambrica.jpg",
    ],
    [
      "DWT310ZK",
      "DEGOLLADORA INALAMBRICA 5/8pul,3/4pul,7/8pul 18V X 2 Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/09/DWT310_Degolladora_inalambrica.jpg",
    ],
    [
      "EA3202S40B",
      "MOTOSIERRA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/EA3202S40B_Motosierra-400x338.png",
    ],
    [
      "EA5600F53E",
      "SIERRA DE CADENA A GASOLINA 2 TIEMPOS",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/EA5600F53E_Motosierra.png",
    ],
    [
      "EA6100P60E",
      "SIERRA DE CADENA A GASOLINA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/EA6100P60E_Motosierra-400x338.png",
    ],
    [
      "EB5300TH",
      "SOPLADORA A GASOLINA",
      "https://cdn.makitatools.com/apps/cms/img/eb5/de939a17-8b89-4213-916a-ea4af4fd7c37_eb5300th_p_1500px.png",
    ],
    [
      "EB7660TH",
      "SOPLADORA A GASOLINA TIPO MOCHILA 75.6 ML 4-STROKE",
      "https://cdn.makitatools.com/apps/cms/img/eb7/e7ebfd67-f70e-43be-954d-0804c313bb32_eb7660th_p_1500px.png",
    ],
    [
      "EB7660WH",
      "SOPLADORA A GASOLINA TIPO MOCHILA 75.6 ML 4-STROKE",
      "https://cdn.makitatools.com/apps/cms/img/eb7/08b970de-bfb0-4382-82e1-b52bd6aa3bfc_eb7660wh_p_1500px.png",
    ],
    [
      "EBH252L",
      "DESBROZADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/EBH252L_Desbrozadora.png",
    ],
    [
      "EBH252U",
      "DESBROZADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/EBH252U_Desbrozadora.png",
    ],
    [
      "EBH340U",
      "DESBROZADORA",
      "https://www.makita.com.ar/uploads/products/1561406219-15299.jpg",
    ],
    [
      "EE2650H",
      "ORILLADORA A GASOLINA 25,4CM3 MOTOR 4 TIEMPOS",
      "https://cdn.makitatools.com/apps/cms/img/ee2/8846cebb-9a8d-41a5-bd14-ba55403a2d25_ee2650h_p_1500px.png",
    ],
    [
      "EH7500S",
      "CORTASETOS A GASOLINA 75 cm (29-1/2pul) 22.2 mL (DESC)",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/EH7500S.png",
    ],
    [
      "EH7500W",
      "CORTASETOS A GASOLINA 75 cm (29-1/2pul) 22.2 mL",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/EH7500W.png",
    ],
    [
      "EK7651H",
      "CORTADORA DE CONCRETO 14pul A GASOLINA",
      "https://www.makita.com.mx/wp-content/uploads/woocommerce-placeholder-300x300.png",
    ],
    [
      "EK8100WS",
      "TRONZADORA DE METAL A GASOLINA 16pul",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/EK8100WS.jpg",
    ],
    [
      "EM4350LH",
      "DESBROZADORA A GASOLINA 43ML MOTOR 4 TIEMPOS",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/196129-9-g.jpg",
    ],
    [
      "EM4350UH",
      "DESBROZADORA A GASOLINA 43ML MOTOR 4 TIEMPOS",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/196129-9-g.jpg",
    ],
    [
      "EM4351UH",
      "DESBROZADORA A GASOLINA 43ML MOTOR 4 TIEMPOS",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/EM4351UH_Desbrozadora.png",
    ],
    [
      "EN4950H",
      "CORTA SETOS DE EXTENCION",
      "https://cdn.makitatools.com/apps/cms/img/en4/ff914291-d92f-4f03-89d2-a39c7c013985_en4950h_p_1500px.png",
    ],
    [
      "EN4951SH",
      "CORTA SETOS DE EXTENCION A GASOLINA",
      "https://cdn.makitatools.com/apps/cms/img/en4/6f0f85b9-7409-4f17-84b5-6ab97dd2a7cc_en4951sh_p_1500px.png",
    ],
    [
      "EN5950SH",
      "CORTASETOS DE EXTENCION A GASOLINA",
      "https://cdn.makitatools.com/apps/cms/img/en5/5b30d7bb-c18d-4a10-b409-c830f5795246_en5950sh_p_1500px.png",
    ],
    [
      "ER2600L",
      "DESBROZADORA",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/ER2600L.png",
    ],
    [
      "EVH2000",
      "FUMIGADORA A GASOLINA 4 TIEMPOS",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/EVH2000_Fumigadora.jpg",
    ],
    [
      "EX2650LHM",
      "DESBROZADORA",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/EX2650LHM.png",
    ],
    [
      "EY2650H25H",
      "MOTOSIERRA DE EXTENSION TELESCOPICA A GASOLINA",
      "https://cdn.makitatools.com/apps/cms/img/ey2/13c07509-c938-4617-a27f-639650164d1e_ey2650h25h_p_1500px.png",
    ],
    [
      "FD07R1",
      "ATORNILLADOR TALADRO INALAMBRICO CXT 10,8Vcc-12Vcc",
      "https://cdn.makitatools.com/apps/cms/img/fd0/ff3b79d9-61c7-41e0-b299-b08b76c3c179_fd07r1_k_1500px.png",
    ],
    [
      "FS2500",
      "ATORNILLADOR",
      "https://cdn.makitatools.com/apps/cms/img/fs2/dd7e4bfe-a53a-43db-92bd-118ab69e4b6f_fs2500_p_1500px.png",
    ],
    [
      "FS2700",
      "ATORNILLADOR",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/FS2700.jpg",
    ],
    [
      "FS2701",
      "ATORNILLADOR",
      "https://cdn.makitatools.com/apps/cms/img/fs2/2c762b9e-f3bc-4df4-800b-3c0b2db70606_fs2701_p_1500px.png",
    ],
    [
      "FS4000",
      "ATORNILLADOR ANTES 6824N",
      "https://www.makita.com.ar/uploads/products/1561406220-29356.jpg",
    ],
    [
      "FS4200",
      "ATORNILLADOR ANTES 6824N",
      "https://cdn.makitatools.com/apps/cms/img/fs4/35607831-c7a3-431f-9f38-aa08cc6f2bb5_fs4200_p_1500px.png",
    ],
    [
      "FS6300",
      "ATORNILLADOR",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/FS6300.png",
    ],
    [
      "GA4030",
      "ESMERILADORA ANGULAR 110MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/GA4030_Miniesmeriladora.png",
    ],
    [
      "GA4530",
      "ESMERILADORA ANGULAR 115MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/Miniesmeriladora_GA4530.png",
    ],
    [
      "GA4534",
      "ESMERILADORA ANGULAR 115MM",
      "https://cdn.makitatools.com/apps/cms/img/ga4/37355430-de42-44c9-8aad-88f98e8130ab_ga4534_p_1500px.png",
    ],
    [
      "GA4540C",
      "ESMERILADORA ANGULAR DE 115mm (4-1/2î)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/GA4540C.jpg",
    ],
    [
      "GA5010",
      "ESMERILADORA ANGULAR 125MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/GA5010_Esmeriladora.png",
    ],
    [
      "GA5021C",
      "ESMERILADORA ANGULAR 125MM (5pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/GA5021C_Esmeriladora.png",
    ],
    [
      "GA6040C",
      "ESMERILADORA 150mm (6î) (DESC)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/GA6040C.jpg",
    ],
    [
      "GA7020",
      "ESMERILADORA ANGULAR 180 MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/GA7020_Esmeriladora_angular.jpg",
    ],
    [
      "GA7030",
      "ESMERILADORA ANGULAR 180MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/GA7030_Esmeriladora_angular.jpg",
    ],
    [
      "GA7040R",
      "ESMERILADORA ANGULAR 180MM (7pul)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/GA7040R.jpg",
    ],
    [
      "GA7040S",
      "ESMERILADORA ANGULAR 8.500 R.P.M",
      "https://cdn.makitatools.com/apps/cms/img/ga7/4b9d9c8d-0836-480a-afd0-85e5af7592a9_ga7040s_p_1500px.png",
    ],
    [
      "GA7040S (220V)",
      "ESMERILADORA ANGULAR",
      "https://www.makita.com.ar/uploads/products/1561406221-90218.jpg",
    ],
    [
      "GA7060",
      "ESMERILADORA 180MM (7pul)",
      "https://cdn.makitatools.com/apps/cms/img/ga7/89bd2f5f-7483-421f-8546-9b0c6f60d5ce_ga7060_p_1500px.png",
    ],
    [
      "GA7060 (220V)",
      "ESMERILADORA 180MM (7pul)",
      "https://www.makita.com.ar/uploads/products/1561406221-21251.jpg",
    ],
    [
      "GA7061R",
      "ESMERILADORA 180MM (7pul)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/GA7061R.jpg",
    ],
    [
      "GA7061R (220V)",
      "ESMERILADORA 180MM (7pul)",
      "https://www.makita.com.ar/uploads/products/1561406221-56084.jpg",
    ],
    [
      "GA7911",
      "LIJADORA ANGULAR 7pul(177.8mm) 6000rpm",
      "https://cdn.makitatools.com/apps/cms/img/ga7/f1417d3b-6fd4-42b0-ac6e-60067d6304b7_ga7911_p_1500px.png",
    ],
    [
      "GA9020",
      "ESMERILADORA ANGULAR 230 MM  ANTES 9069",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/GA9020R_Esmeriladora_angular.jpg",
    ],
    [
      "GA9020R",
      "ESMERILADORA ANGULAR 9pul",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/GA9020R_Esmeriladora_angular.jpg",
    ],
    [
      "GA9030",
      "ESMERILADORA ANGULAR 230MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/GA9030_Esmeriladora_angular.jpg",
    ],
    [
      "GA9040R",
      "ESMERILADORA ANGULAR 230MM (9pul)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/GA9040R.jpg",
    ],
    [
      "GA9040S",
      "ESMERILADORA ANGULAR 230MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/GA9040S-220V_Esmeriladora_Angular.png",
    ],
    [
      "GA9040S (220V)",
      "ESMERILADORA ANGULAR 230MM (220V)",
      "https://www.makita.com.ar/uploads/products/1561406221-36499.jpg",
    ],
    [
      "GA9060",
      "ESMERILADORA 230mm (9î)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/GA9060_220V_Esmeriladora_angular.png",
    ],
    [
      "GA9060 (220V)",
      "ESMERILADORA 230mm (9î)",
      "https://www.makita.com.ar/uploads/products/1561406221-40478.jpg",
    ],
    [
      "GA9061R",
      "ESMERILADORA 230mm (9î)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/GA9061R.jpg",
    ],
    [
      "GA9061R (220V)",
      "ESMERILADORA 230mm (9î)",
      "https://www.makita.com.ar/uploads/products/1561406222-84950.jpg",
    ],
    [
      "GA9062",
      "ESMERILADORA 230MM (9pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/DVC350Z_Aspiradora-inalambrica.jpg",
    ],
    [
      "GB600",
      "ESMERIL DE BANCO 6 X 3/4pul(152.4 X 19mm)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/GB600_Esmeril-de-banco-400x338.png",
    ],
    [
      "GB601",
      "ESMERIL DE BANCO 6 X 1pul(152.4X 25.4mm)28",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/GB600_Esmeril_de_banco-1-400x338.png",
    ],
    [
      "GB800",
      "ESMERIL DE BANCO 8 X 1pul(203.2 X 25.4mm)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/GB800_Esmeril_de_banco-400x338.png",
    ],
    [
      "GD0600",
      "RECTIFICADOR 6MM (1/4pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/741617-7.jpg",
    ],
    [
      "GD0603",
      "RECTIFICADOR 6MM (1/4pul)",
      "https://cdn.makitatools.com/apps/cms/img/gd0/36100fad-9da5-4af1-82f9-a68ca085cf0b_gd0603_p_1500px.png",
    ],
    [
      "GD0800C",
      "RECTIFICADOR 1/4pul(6mm) 750W",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/GD0800C_Rectificador-400x338.png",
    ],
    [
      "GD0801C",
      "RECTIFICADOR 25MM (1pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/GD0801C_Rectificador-400x338.png",
    ],
    [
      "GD0810C",
      "RECTIFICADOR 1/4pul(6mm)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/GD0810C_Rectificador-400x338.png",
    ],
    [
      "GD0811C",
      "RECTIFICADOR 6,6A 25 mm",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/GD0801C_Rectificador-400x338.png",
    ],
    [
      "GS6000",
      "ESMERIL RECTO 150MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/GS6000_Esmeril_recto-400x338.png",
    ],
    [
      "GV5010",
      "LIJADORA DE DISCO 125MM",
      "https://cdn.makitatools.com/apps/cms/img/gv5/e38e2f9a-b7e3-4bb0-aa08-684ccc817e69_gv5010_p_1500px.png",
    ],
    [
      "GV7000",
      "LIJADORA DE DISCO 180mm",
      "https://www.makita.com.ar/uploads/products/1561406224-16192.jpg",
    ],
    [
      "HB500",
      "TALADRO MAGNETICO",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/HB500.jpg",
    ],
    [
      "HG5012K",
      "PISTOLA DE CALOR",
      "https://www.makita.com.ar/uploads/products/1561406228-92857.jpg",
    ],
    [
      "HG5030",
      "PISTOLA DE CALOR",
      "https://www.makita.com.mx/wp-content/uploads/2018/08/HG5030_Pistola_de_calor-400x338.png",
    ],
    [
      "HG5030K",
      "PISTOLA DE CALOR",
      "https://www.makita.com.mx/wp-content/uploads/2018/08/HG5030_Pistola_de_calor-400x338.png",
    ],
    [
      "HG6020",
      "PISTOLA DE CALOR",
      "https://www.makita.com.ar/uploads/products/1561406228-99092.jpg",
    ],
    [
      "HG6020 (220V)",
      "PISTOLA DE CALOR",
      "https://www.makita.com.ar/uploads/products/1561406228-99092.jpg",
    ],
    [
      "HG6030K",
      "PISTOLA DE CALOR",
      "https://www.makita.com.mx/wp-content/uploads/2018/08/HG5030_Pistola_de_calor-400x338.png",
    ],
    [
      "HG6031VK",
      "PISTOLA DE CALOR",
      "https://www.makita.com.mx/wp-content/uploads/2018/08/HG5030_Pistola_de_calor-400x338.png",
    ],
    [
      "HM0870C",
      "MARTILLO DEMOLEDOR",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HM0870C_Martillo-de-demolicion.png",
    ],
    [
      "HM1111C",
      "MARTILLO DEMOEDOR 8KG 1300W",
      "https://www.makita.com.mx/wp-content/uploads/2018/06/134887-9-c.jpg",
    ],
    [
      "HM1111C",
      "MARTILLO DEMOEDOR 8KG 1300W",
      "https://www.makita.com.mx/wp-content/uploads/2018/06/134887-9-c.jpg",
    ],
    [
      "HM1203C",
      "MARTILLO DEMOLEDOR",
      "https://www.makita.com.mx/wp-content/uploads/2018/06/134887-9-c.jpg",
    ],
    [
      "HM1211B",
      "MARTILLO DEMOLEDOR HEX.3/4pul(19mm) 1130W",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HM1211B_Martillo_de_demolicion.png",
    ],
    [
      "HM1213C",
      "MARTILLO DEMOLEDOR",
      "https://www.makita.com.mx/wp-content/uploads/2018/06/134887-9-c.jpg",
    ],
    [
      "HM1214C",
      "MARTILLO DEMOLEDOR",
      "https://cdn.makitatools.com/apps/cms/img/hm1/975f21eb-27a7-42ee-b648-1de2088de441_hm1214c_k_1500px.png",
    ],
    [
      "HM1304B",
      "MARTILLO DEMOLEDOR",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HM1304B_Martillo_de_demolicion.png",
    ],
    [
      "HM1307CB",
      "MARTILLO DEMOLEDOR",
      "https://cdn.makitatools.com/apps/cms/img/hm1/01b6d0e9-0260-439a-abc4-442b08ef7d56_hm1307cb_k_1500px.png",
    ],
    [
      "HM1317CB",
      "MARTILLO DEMOLEDOR",
      "https://cdn.makitatools.com/apps/cms/img/hm1/fd8931d1-8109-4b53-b8c9-dc64fe9644fa_hm1317cb_k_1500px.png",
    ],
    [
      "HM1801",
      "MARTILLO DEMOLEDOR",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HM1801-HM1810_Rompedor_Electrico.png",
    ],
    [
      "HM1802",
      "MARTILLO DEMOLEDOR ELECTRICO",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/D-54972.jpg",
    ],
    [
      "HM1810",
      "MARTILLO DEMOLEDOR ELECTRICO",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HM1801-HM1810_Rompedor_Electrico.png",
    ],
    [
      "HM1812",
      "MARTILLO DEMOLEDOR ELECTRICO",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HM1801-HM1810_Rompedor_Electrico.png",
    ],
    [
      "HP1230",
      "TALADRO PERCUTOR",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HP1230_Rotomartillo.jpg",
    ],
    [
      "HP1630",
      "ROTOMARTILLO 16MM",
      "https://www.makita.com.ar/uploads/products/1561406229-53716.jpg",
    ],
    [
      "HP1640",
      "ROTOMARTILLO 1/2pul V.V R.V",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HP1640_Rotomartillo.jpg",
    ],
    [
      "HP2050",
      "TALADRO PERCUTOR 2 VEL 20mm",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HP2050-HP2050H_Rotomartillo.jpg",
    ],
    [
      "HP2050H",
      "TALADRO PERCUTOR 2 VEL 20mm",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HP2050-HP2050H_Rotomartillo.jpg",
    ],
    [
      "HP2070",
      "TALADRO PERCUTOR 1000W",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HP2070_Rotomartillo.jpg",
    ],
    [
      "HP331DWYE",
      "ROTOMARTILLO ATORNILLADOR INALAMBRICO CXT 12V LI-ION",
      "https://www.makita.com.ar/uploads/products/1561406229-27196.jpg",
    ],
    [
      "HP332DWYE",
      "ROTOMARTILLO ATORNILLADOR INALAMBRICO 10,8Vcc-12Vcc",
      "https://www.makita.com.ar/uploads/products/1561406230-34129.jpg",
    ],
    [
      "HR140DWMJ",
      "MARTILLO ROTATIVO 14MM (9/16pul) CXT 12V Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/HR140DSMJ.png",
    ],
    [
      "HR140DWYE1",
      "MARTILLO ROTATIVO 14MM (9/16pul) CXT 12V Litio-Ion",
      "https://www.makita.com.ar/uploads/products/1561406230-61584.jpg",
    ],
    [
      "HR140DZ",
      "MARTILLO ROTATIVO 14MM (9/16pul) CXT 12V Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/HR140DZ.jpg",
    ],
    [
      "HR166DWYJ",
      "MARTILLO ROTATIVO CXT 16 MM (5/8pul)",
      "https://www.makita.com.ar/uploads/products/1561406230-39574.jpg",
    ],
    [
      "HR166DZ",
      "MARTILLO ROTATIVO CXT 16 MM (5/8pul)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/HR166DZ.jpg",
    ],
    [
      "HR1840",
      "MARTILLO ROTATIVO 18MM",
      "https://cdn.makitatools.com/apps/cms/img/hr1/1d73d344-f02c-4ce6-967e-c53f7f786735_hr1840_p_1500px.png",
    ],
    [
      "HR1841F",
      "MARTILLO ROTATIVO 18MM",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/HR1841F.png",
    ],
    [
      "HR2230",
      "MARTILLO ROTATIVO 22MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/06/158057-6-d.jpg",
    ],
    [
      "HR2460",
      "MARTILLO ROTATIVO ANTES HR2440",
      "https://www.makita.com.mx/wp-content/uploads/2018/06/158057-6-d.jpg",
    ],
    [
      "HR2470",
      "MARTILLO ROTATIVO 24mm  ANTES HR2450",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HR2470_Rotomartillo-electro-neumatico.jpg",
    ],
    [
      "HR2470X6",
      "MARTILLO ROTATIVO",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HR2470_Rotomartillo-electro-neumatico.jpg",
    ],
    [
      "HR2475",
      "MARTILLO ROTATIVO 24MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HR2475X4_Kit-martillo-rotatorio-combinado-y-esmeriladora-angular.jpg",
    ],
    [
      "HR2475X4",
      "COMBO MARTILLO ROTATIVO 24MM + ESMERIL 4-1/2pul 9557HNG",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HR2475X4_Kit-martillo-rotatorio-combinado-y-esmeriladora-angular.jpg",
    ],
    [
      "HR2600",
      "MARTILLO ROTATIVO",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HR2600_Rotomartillo_electro_neumatico.jpg",
    ],
    [
      "HR2630",
      "MARTILLO ROTATIVO",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HR2630_Rotomartillo_electro_neumatico.jpg",
    ],
    [
      "HR2630A",
      "MARTILLO ROTATIVO COMBINADO",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HR2630_Rotomartillo_electro_neumatico.jpg",
    ],
    [
      "HR2630T",
      "MARTILLO ROTATIVO COMBINADO 26MM",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/HR2630T.jpg",
    ],
    [
      "HR2630XG",
      "COMBO MARTILLO ROTATIVO 26MM (1pul) +ESMERIL 4-1/2pul 9554HN",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/HR2630XG_Rotomartillo_combinado.jpg",
    ],
    [
      "HR2650",
      "MARTILLO ROTATIVO COMBINADO",
      "https://www.makita.com.ar/uploads/products/1561406231-14368.jpg",
    ],
    [
      "HR2810",
      "MARTILLO ROTATIVO",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/HR2810.jpg",
    ],
    [
      "HR2810T",
      "MARTILLO ROTATIVO",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/194079-2-a.jpg",
    ],
    [
      "HR3200C",
      "MARTILLO ROTATIVO",
      "https://www.makita.com.mx/wp-content/uploads/2018/06/122428-3-e.jpg",
    ],
    [
      "HR4002",
      "MARTILLO ROTATIVO 40MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/06/416299-1-c.jpg",
    ],
    [
      "HR4003C",
      "MARTILLO ROTATIVO 40MM (1-9/16)",
      "https://www.makita.com.mx/wp-content/uploads/2018/06/122428-3-e.jpg",
    ],
    [
      "HR4013C",
      "MARTILLO ROTATIVO 40mm",
      "https://www.makita.com.mx/wp-content/uploads/2018/06/122428-3-e.jpg",
    ],
    [
      "HR5202C",
      "MARTILLO ROTATIVO 15A †52MM (2î)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/HR5202C.jpg",
    ],
    [
      "HR5211C",
      "MARTILLO ROTATIVO 52mm (2pul) (DESC)",
      "https://www.makita.com.mx/wp-content/uploads/2018/06/134887-9-c.jpg",
    ],
    [
      "HR5212C",
      "MARTILLO ROTATORIO",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/HR5212C.jpg",
    ],
    [
      "HS0600",
      "SIERRA CIRCULAR 260MM",
      "https://cdn.makitatools.com/apps/cms/img/hs0/61cad452-59a0-4483-88d0-7eb7305d1b78_hs0600_p_1500px.png",
    ],
    [
      "HS7010",
      "SIERRA CIRCULAR 165MM",
      "https://www.makita.com.ar/uploads/products/1561406232-18962.jpg",
    ],
    [
      "HS7010K",
      "SIERRA CIRCULAR 165MM",
      "https://www.makita.com.ar/uploads/products/1561406232-18962.jpg",
    ],
    [
      "HS7600",
      "SIERRA CIRCULAR 185MM (7-1/4î)",
      "https://cdn.makitatools.com/apps/cms/img/hs7/bc689d52-5b86-4c9d-9982-d5e7a2b3220c_hs7600_p_1500px.png",
    ],
    [
      "HS7600K",
      "SIERRA CIRCULAR 185MM (7-1/4î)",
      "https://www.makita.com.ar/uploads/products/1561406247-23671.jpg",
    ],
    [
      "HU02",
      "CORTASETOS INALAMBRICO 18Vcc Li-ion",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/HU02_Cortasetos_inalambrico.png",
    ],
    [
      "HW1200",
      "HIDROLAVADORA",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/HW1200.jpg",
    ],
    [
      "HW1300",
      "HIDROLAVADORA",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/HW1300.jpg",
    ],
    [
      "JN1601",
      "ROEDORA 1.6mm",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/JN1601_Roedora.jpg",
    ],
    [
      "JN3201",
      "ROEDORA DE 3,2MM",
      "https://www.makita.com.ar/uploads/products/1561406249-86634.jpg",
    ],
    [
      "JR105DWYE",
      "SIERRA RECIPROCA INALAMBRICA CXT 12VCC",
      "https://www.makita.com.ar/uploads/products/1561406249-78738.jpg",
    ],
    [
      "JR3050",
      "SIERRA RECIPROCA",
      "https://www.makita.com.ar/uploads/products/1561406250-86487.jpg",
    ],
    [
      "JR3050T",
      "SIERRA RECIPROCA",
      "https://www.makita.com.ar/uploads/products/1561406250-86487.jpg",
    ],
    [
      "JR3070CT",
      "SIERRA RECIPROCA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/JR3050T_Sierra_reciproca.png",
    ],
    [
      "JS1300",
      "CIZALLA 1.3mm",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/JS1300_Cizalla_recta.jpg",
    ],
    [
      "JS1601",
      "CIZALLA 1.6mm",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/191383-0-a1000.jpg",
    ],
    [
      "JS1602",
      "CIZALLA 1.6mm",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/191383-0-a1000.jpg",
    ],
    [
      "JS3201",
      "CIZALLA PARA METAL",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/191383-0-a1000.jpg",
    ],
    [
      "JV0600K",
      "SIERRA CALADORA",
      "https://cdn.makitatools.com/apps/cms/img/jv0/3604f908-7382-4f5e-a6ad-07f10f727a3f_jv0600k_k_1500px.png",
    ],
    [
      "JV101DZ",
      "SIERRA CALADORA INALAMBRICA CXT 10.8V LI ION (DESC)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/JV101DZ.jpg",
    ],
    [
      "JV103DWYJ",
      "SIERRA CALADORA INALAMBRICA CXT 12V Litio-Ion",
      "https://www.makita.com.ar/uploads/products/1561406251-26903.jpg",
    ],
    [
      "JV103DZ",
      "SIERRA CALADORA INALAMBRICA CXT 12V Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/JV103DZ.jpg",
    ],
    [
      "KP0800",
      "CEPILLO 3 1/4pul 16000 rpm 620 w",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/KP0800.jpg",
    ],
    [
      "KP0810C",
      "CEPILLO",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/KP0810C.jpg",
    ],
    [
      "LB1200F",
      "SIERRA DE BANDA",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/4350FCT_Sierra-caladora-400x338.png",
    ],
    [
      "LC1230",
      "CORTADORA DE METAL 12pul 305mm C/DISCO DE CARB",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/LC1230_Cortadora_de_metal.jpg",
    ],
    [
      "LD030P",
      "MEDIDOR LASER DE DISTANCIA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/LD030P_Medidor_Laser.jpg",
    ],
    [
      "LD050P",
      "MEDIDOR LASER DE DISTANCIA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/LD050P_Medidor_Laser.png",
    ],
    [
      "LD080P",
      "MEDIDOR LASER",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/LD080PI_Medidor_Laser.jpg",
    ],
    [
      "LD080PI",
      "MEDIDOR LASER DE DISTANCIA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/LD080PI_Medidor_Laser.jpg",
    ],
    [
      "LF1000",
      "SIERRA DE INGLETE DE MESA 10pul",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/LF1000_Sierra_Alternativa.jpg",
    ],
    [
      "LH1201FL",
      "SIERRA DE INGLETE",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/LH1201FL.jpg",
    ],
    [
      "LS1017L",
      "SIERRA DE INGLETE COMPUESTA",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/LS1017L_Sierra_de_inglete_telescopica.jpg",
    ],
    [
      "LS1018L",
      "SIERRA DE INGLETE TELESCOPICA DOBLE BISEL",
      "https://www.makita.com.ar/uploads/products/1561406252-41359.jpg",
    ],
    [
      "LS1019L",
      "SIERRA DE INGLETE TELESCOPICA 260MM",
      "https://cdn.makitatools.com/apps/cms/img/ls1/1242566b-9bad-41d4-be5d-45d5dd71e6ae_ls1019l_p_1500px.png",
    ],
    [
      "LS1030N",
      "SIERRA DE INGLETE",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/224299-5-e.jpg",
    ],
    [
      "LS1040F",
      "SIERRA DE INGLETE COMPUESTO 10-1/4pul C/FOCO",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/LS1040F_Sierra_de_inglete_compuesto.jpg",
    ],
    [
      "LS1040FX1",
      "SIERRA INGLETEADORA 255mm (10pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/LS1040F_Sierra_de_inglete_compuesto.jpg",
    ],
    [
      "LS1219L",
      "SIERRA DE INGLETE TELESCOPICA 305MM",
      "https://cdn.makitatools.com/apps/cms/img/ls1/74bdecfd-5ba7-4ca2-a8b1-6b0a8ace4b3b_ls1219l_p_1500px.png",
    ],
    [
      "LS1221",
      "SIERRA DE INGLETE SIN CONTROL ELECTRONICO",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/LS1221_Sierra_de_inglete_compuesto-400x338.png",
    ],
    [
      "LW1401",
      "TRONZADORA DE METAL 355mm (14î)",
      "https://cdn.makitatools.com/apps/cms/img/lw1/b6168d1b-e173-49d5-9746-e97a65b0b71d_lw1401_p_1500px.png",
    ],
    [
      "M0600G",
      "TALADRO 10MM (3/8pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M0600G_taladro-400x338.png",
    ],
    [
      "M0801G",
      "ROTOMARTILLO 16MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M0801G_rotomartillo-400x338.png",
    ],
    [
      "M0801KG",
      "ROTOMARTILLO",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M0801G_rotomartillo-400x338.png",
    ],
    [
      "M0901G",
      "ESMERILADORA 115MM (4-1/2î)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M0901G_esmeriladora-400x338.png",
    ],
    [
      "M0920G",
      "ESMERILADORA 180MM (7î)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M0920G_esmeriladora-400x338.png",
    ],
    [
      "M0921G",
      "ESMERILADORA ANGULAR 230MM (9î)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M0921G_Esmeriladora_angular-400x338.png",
    ],
    [
      "M1902G",
      "CEPILLO 82MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M1902G_cepillo.png",
    ],
    [
      "M3600G",
      "REBAJADORA  12,7mm (1/2î) 22 000r/min",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M3600G_router-400x338.png",
    ],
    [
      "M3601G",
      "REBAJADORA PARA MADERA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M3601G_Router.png",
    ],
    [
      "M3700G",
      "ROUTER 6mm (1/4pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M3700G_rebajadora-400x338.png",
    ],
    [
      "M4000G",
      "SOPLADORA 1,2-2,9M3/MIN",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M4000G_sopladora-1-400x338.png",
    ],
    [
      "M4301G",
      "SIERRA CALADORA 65mm (2-9/16î)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M4301G_sierra-caladora.png",
    ],
    [
      "M4500G",
      "SIERRA RECIPROCA 1,010 W 28 mm (1-1/8pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M4500g_sierra-reciproca.png",
    ],
    [
      "M5801G",
      "SIERRA CIRCULAR† 185MM (7-1/4î)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M5801G-M5801KG_sierra_cicular-400x338.png",
    ],
    [
      "M5801KG",
      "SIERRA CIRCULAR 185MM (7-1/4î)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M5801G-M5801KG_sierra_cicular-400x338.png",
    ],
    [
      "M6200G",
      "TALADRO 13MM (1/2î)",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/M6201G_taladro-400x338.png",
    ],
    [
      "M6201G",
      "TALADRO 13MM (1/2î)",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/M6201G_taladro-400x338.png",
    ],
    [
      "M6501G",
      "TALADRO DE ALTA VELOCIDAD† 6,5MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/M6501G_taladro-400x338.png",
    ],
    [
      "M6600XG",
      "MEZCLADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/M6600G_mezcladora-400x338.png",
    ],
    [
      "M8600G",
      "MARTILLO DEMOLEDOR ELECTRICO 11/16pul 17mm Hex Shank",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/M8600G_martillo-de-demolicion.png",
    ],
    [
      "M8700G",
      "MARTILLO ROTATIVO †20MM (13/16î)",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/M8700G_rotomartillo-400x338.png",
    ],
    [
      "M8701G",
      "MARTILLO ROTATIVO",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/MKT0005G_combo.png",
    ],
    [
      "M9000G",
      "ESMERILADORA ANGULAR 180mm (7pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/M9000G_esmeriladora-400x338.png",
    ],
    [
      "M9001G",
      "ESMERILADORA ANGULAR 230mm (9pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M0921G_Esmeriladora_angular-400x338.png",
    ],
    [
      "M9002G",
      "ESMERILADORA ANGULAR DE DISCO 125MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/M9002G_esmeriladora-400x338.png",
    ],
    [
      "M9200G",
      "LIJADORA ORBITAL 125MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/M9200G_lijadora-400x338.png",
    ],
    [
      "M9201G",
      "LIJADORA DE ACABADO",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/M9201G_lijadora-400x338.png",
    ],
    [
      "M9203G",
      "LIJADORA DE ACABADO 93mm x 228mm (3-5/8î x 7-1/4î)",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/M9203G_lijadora-400x338.png",
    ],
    [
      "M9204G",
      "LIJADORA ORBITAL 240W 125mm (5î)",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/M9204G_lijadora-400x338.png",
    ],
    [
      "M9400G",
      "LIJADORA DE BANDA 100MM X 610MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/M9400G_lijadora-400x338.png",
    ],
    [
      "MAC2400",
      "COMPRESOR 2.5HP 15.9lt",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/MAC2400_compresor_de_aire.jpg",
    ],
    [
      "MAC5200",
      "COMPRESOR 3HP 19.7lt",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/MAC5200_Compresor_de_aire.jpg",
    ],
    [
      "MAC5501G",
      "COMPRESOR 5.5HP, 37.85 lts, 135psi",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/MAC5501G_Compresor_de_aire.jpg",
    ],
    [
      "MAC700",
      "COMPRESOR 2.0HP 9.8lt",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/MAC700_Compresor_de_aire.jpg",
    ],
    [
      "DGA452RMJ",
      "ESMERILADORA INAL¡MBRICA 18VCC",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DGA452_Esmeriladora_angular_inalambrica.png",
    ],
    [
      "DLX2131SY",
      "COMBO DHP482Z+DTD152Z+DC18SD+BL1815N(2)+BIT+TOOL BAG",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/DLX2131SY-_Combo.png",
    ],
    [
      "DS5000",
      "TALADRO 16 mm",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DS5000_Taladro.png",
    ],
    [
      "GB800",
      "ESMERIL DE BANCO 8 X 1pul(203.2 X 25.4mm)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/GB800_Esmeril_de_banco-400x338.png",
    ],
    [
      "GD0800C",
      "RECTIFICADOR 1/4pul(6mm) 750W",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/GD0800C_Rectificador-400x338.png",
    ],
    [
      "MLS100",
      "SIERRA DE INGLETE 10pul",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/Sierra_inglete_MSL100X1.png",
    ],
    [
      "MLS100X1",
      "SIERRA DE INGLETE 10pul",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/Sierra_inglete_MSL100X1.png",
    ],
    [
      "MLT100",
      "SIERRA CIRCULAR DE BANCO 10pul",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/MLT100_Sierra_de_banco-400x338.png",
    ],
    [
      "M5801KG",
      "SIERRA CIRCULAR 185MM (7-1/4î)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M5801G-M5801KG_sierra_cicular-400x338.png",
    ],
    [
      "MP100DZ",
      "COMPRESOR INALAMBRICO 121PSI 12L/min Litio Ion (CXT)",
      "https://cdn.makitatools.com/apps/cms/img/mp1/7725437c-1e61-4e1e-9a40-de56f8942aac_mp100dz_p_1500px.png",
    ],
    [
      "MTK0003G",
      "COMBO MT M0801G ROTOMARTILLO & M0901G ESMERILADORA (4-1/2pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/MKT0003G_combo.png",
    ],
    [
      "MTK0005G",
      "COMBO MT M8701G ROTOMARTILLO & M0901G ESMERILADORA (4-1/2pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/MKT0005G_combo.png",
    ],
    [
      "MU02Z",
      "TIJERAS INALAMBRICAS PARA HIERBA †18VCC LITIO-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/MU02Z_Tijeras_inalambricas_para_pasto.png",
    ],
    [
      "N5900B",
      "SIERRA CIRCULAR 9-1/4pul",
      "https://www.makita.com.ar/uploads/products/1561406267-47314.jpg",
    ],
    [
      "PC1100",
      "CEPILLO DE CONCRETO (DESC A PC5001C)",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/B-12289-a1000.jpg",
    ],
    [
      "PC5000C",
      "APLANADOR DE CONCRETO",
      "https://cdn.makitatools.com/apps/cms/img/pc5/02a5b7b1-a200-40f9-b24c-9f7c65809f12_pc5000c_k_1500px.png",
    ],
    [
      "PC5001C",
      "APLANADOR DE CONCRETO antes PC1100",
      "https://cdn.makitatools.com/apps/cms/img/pc5/77f71235-734b-4aaa-a64d-117d49a686cf_pc5001c_k_1500px.png",
    ],
    [
      "PC5010C",
      "Cepilladora angular para concreto, 10,000 rpm",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/PC5010C.jpg",
    ],
    [
      "PE3450H",
      "BARRENADORA 4 TIEMPOS",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/PE3450H_Motoperforador.jpg",
    ],
    [
      "PF0300",
      "BOMBA SUMERGIBLE",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/PF0300.jpg",
    ],
    [
      "PF0403",
      "BOMBA SUMERGIBLE",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/PF0403.jpg",
    ],
    [
      "PJ7000",
      "ENGALLETADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/PJ7000_Engalletadora-400x338.png",
    ],
    [
      "PK5011C",
      "LIJADORA DE DISCO 125MM",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/B-14554-d1000.jpg",
    ],
    [
      "PLM4627N",
      "CORTADORA DE CESPED A GASOLINA460mm, B&S500E,140ml,   Alt.",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/PL4267N_Podadora.png",
    ],
    [
      "PLM4628N",
      "CORTA CESPED",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/PL428N_Podadora.png",
    ],
    [
      "PLM5120N2",
      "CORTA CESPED",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/PLM5120N2_Podadora_A_Gasolina.png",
    ],
    [
      "PLM5121N2",
      "CORTA CESPED",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/PLM5121N2_Podadora_A_Gasolina.png",
    ],
    [
      "PM7650H",
      "NEBULIZADOR A GASOLINA",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/161509-8-d.jpg",
    ],
    [
      "PT354DZ",
      "CLAVADORA INALAMBRICA CXT 12V Litio-Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/PT354DZ.jpg",
    ],
    [
      "PW5001C",
      "AMOLADORA PARA CONCRETO 125 mm",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/M0400GC_cortadora_marmol-400x338.png",
    ],
    [
      "RBC414U",
      "DESBROZADORA A GASOLINA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/RBC414U_desbrozadora-400x338.png",
    ],
    [
      "RF1100",
      "REBAJADORA 12mm 12 HP.10 A,V.24000",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/RF1100_Router.png",
    ],
    [
      "RF1101",
      "REBAJADORA 12mm 2 H.P.10A V.24000",
      "https://cdn.makitatools.com/apps/cms/img/rf1/9a6d3e62-5fd5-4bea-981d-e15f3e382c14_rf1101_p_1500px.png",
    ],
    [
      "RM02",
      "RADIO INALAMBRICO CXT 12V MAX Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2018/09/RM02_Radio_de_trabajo.png",
    ],
    [
      "RP0900",
      "ROUTER",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/RP0900.jpg",
    ],
    [
      "RP1800",
      "REBAJADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/RP1800_Router-400x338.png",
    ],
    [
      "RP2301FC",
      "ROUTER",
      "https://cdn.makitatools.com/apps/cms/img/rp2/4e27fffb-991e-433d-9607-d40cf9c2f94c_rp2301fc_p_1500px.png",
    ],
    [
      "RT0700C",
      "RECORTADORA",
      "https://www.makita.com.ar/uploads/products/1561406268-35804.jpg",
    ],
    [
      "RT0700CX2",
      "RECORTADORA",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/RT0700CX2.jpg",
    ],
    [
      "RU02",
      "DESBROZADORA INALAMBRICA 260MM 18V LI-ION",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/DUR181_Desbrozadora_inalambrica.jpg",
    ],
    [
      "SA7000C",
      "PULIDORA 7pul DE ALTA POTENCIA",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/SA7000C.jpg",
    ],
    [
      "SD100DWYJ",
      "SIERRA INALAMBRICA PARA TABLAROCA CXT Litio-Ion 12V",
      "https://www.makita.com.ar/uploads/products/1561406268-64597.jpg",
    ],
    [
      "SG1251J",
      "RANURADORA 125MM (5pul)",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/SG1251J.jpg",
    ],
    [
      "SJ401",
      "SIERRA CALADORA DE BANCO 150W",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/SJ401_Sierra_caladora_de_banco-400x338.png",
    ],
    [
      "SK102Z",
      "NIVELADOR LASER DE LINEAS CRUZADAS",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/SK102Z_Nivelador_laser.jpg",
    ],
    [
      "SK103PZ",
      "NIVELADOR LASER",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/SK103PZ_Nivelador_laser.jpg",
    ],
    [
      "SK104Z",
      "NIVELADOR LASER LINEAS CRUZADAS",
      "https://cdn.makitatools.com/apps/cms/img/sk1/03bc0fae-8a2b-4b72-bced-064e7215cad8_sk104z_p_1500px.png",
    ],
    [
      "SK105DZ",
      "NIVELADOR LASER LINEAS CRUZADAS CXT Litio-Ion",
      "https://cdn.makitatools.com/apps/cms/img/sk1/7df075e3-62c6-4fa9-8558-ee88c3b1ceba_sk105dz_k_1500px.png",
    ],
    [
      "SK105GDZ",
      "NIVELADOR LASER LINEAS CRUZADAS CXT Litio-Ion",
      "https://cdn.makitatools.com/apps/cms/img/sk1/5368d756-7c8a-4826-926e-b77f0e1435d2_sk105gdz_k_1500px.png",
    ],
    [
      "SK106GDZ",
      "NIVELADOR LASER LINEAS CRUZADAS CXT Litio-Ion",
      "https://cdn.makitatools.com/apps/cms/img/sk1/e33fbfb4-4eec-4df7-ac9f-aa1d4ae38d87_sk106gdz_k_1500px.png",
    ],
    [
      "SK209GDZ",
      "GREEN MULTI LINE LASER",
      "https://www.makita.com.mx/wp-content/uploads/2018/07/SK209GD_Nivelador_laser_inalambrico-400x338.png",
    ],
    [
      "SK312GDZ",
      "LINE-POINT LASER",
      "https://www.makita.com.mx/wp-content/uploads/2018/07/SK209GD_Nivelador_laser_inalambrico-400x338.png",
    ],
    [
      "ST113DZ",
      "ENGRAPADORA INALAMBRICA",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/ST113DZ.png",
    ],
    [
      "TB131",
      "TALADRO DE BANCO",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/TB131_Taladro_de_banco.jpg",
    ],
    [
      "TD0100",
      "ATORNILLADOR DE IMPACTO",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/TW0200_Llave_de_impacto.png",
    ],
    [
      "TD0101F",
      "ATORNILLADOR DE IMPACTO",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/TD0101F.jpg",
    ],
    [
      "TD022DSE",
      "ATORNILLADOR DE IMPACTO INALAMBRICO TIPO PLUMA 7.2V 1.5Ah 25",
      "https://cdn.makitatools.com/apps/cms/img/td0/7cc76fb7-7d19-433b-9307-6a60730a57cb_td022dse_k_1500px.png",
    ],
    [
      "TD091DZ",
      "ATORNILLADOR DE IMPACTO INALAMBRICO",
      "https://www.makita.com.ar/uploads/products/1561406272-36306.jpg",
    ],
    [
      "TD110DWYE",
      "ATORNILLADOR DE IMPACTO INALAMBRICO CXT 12VCC LITIO ION",
      "https://www.makita.com.ar/uploads/products/1561406272-71813.jpg",
    ],
    [
      "TD110DZ",
      "ATORNILLADOR DE IMPACTO INALAMBRICO CXT 12VCC LITIO ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/TD110DZ.jpg",
    ],
    [
      "TD111DWYE",
      "ATORNILLADOR TALADRO INALAMBRICO 12VCC LITIO ION",
      "https://www.makita.com.ar/uploads/products/1561406272-31725.jpg",
    ],
    [
      "TD111DZ",
      "ATORNILLADOR TALADRO INALAMBRICO CXT 12Vcc Litio Ion",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/TD111DZ.jpg",
    ],
    [
      "TL064DZ",
      "ATORNILLADOR DE IMPACTO ANGULAR INALAMBRICO CXT 12V Litio-Io",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/TL064DZ.jpg",
    ],
    [
      "TL065DWYE",
      "LLAVE DE IMPACTO ANGULAR INALAMBRICA CXT 12V Litio-Ion",
      "https://www.makita.com.ar/uploads/products/1561406272-51782.jpg",
    ],
    [
      "TL065DZ",
      "LLAVE DE IMPACTO ANGULAR INALAMBRICA CXT 12V Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/TL065DZ.png",
    ],
    [
      "TM3000C",
      "MULTI HERRAMIENTAS",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/TM3000C.png",
    ],
    [
      "TM3010CK",
      "MULTI HERRAMIENTAS",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/TM3010CK.png",
    ],
    [
      "TM30DWAE",
      "MULTIHERRAMIENTA INALAMBRICA CXT  12V MAX LI-ION (DESC)",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/TM30DWAE.png",
    ],
    [
      "TM30DWYE",
      "MULTIHERRAMIENTA INALAMBRICA  CXT 12V MAX LI-ION",
      "https://www.makita.com.ar/uploads/products/1561406272-36611.jpg",
    ],
    [
      "TW0200",
      "LLAVE DE IMPACTO 200Nm 12.7mm (1/2pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/TW0200_Llave_de_impacto.png",
    ],
    [
      "TW0350",
      "LLAVE DE IMPACTO 350 Nm 12.7mm (1/2pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/TW0350_Llave_de_impacto-400x338.png",
    ],
    [
      "TW0350 (220V)",
      "LLAVE DE IMPACTO 350 Nm 12.7mm (1/2pul)",
      "https://www.makita.com.ar/uploads/products/1561406276-53383.jpg",
    ],
    [
      "TW060DZ",
      "LLAVE DE IMPACTO INALAMBRICA CXT",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/TW060DZ.jpg",
    ],
    [
      "TW1000",
      "LLAVE DE IMPACTO 1,000 Nm 25.4mm (1pul)",
      "https://www.makita.com.mx/wp-content/uploads/2018/05/TW1000_Llave_de_impacto.png",
    ],
    [
      "TW160DZ",
      "LLAVE DE IMPACTO INALAMBRICA CXT 12V MAX Litio-Ion",
      "https://uk.makitamedia.com/images/3_Makita/301_machines/3011_machine_main/PNG_Web/TW160DZ.png",
    ],
    [
      "TW161DZ",
      "LLAVE DE IMPACTO INALAMBRICA",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/TW161DZ.jpg",
    ],
    [
      "UB1103",
      "SOPLADORA 0-4, 1m3/min",
      "https://cdn.makitatools.com/apps/cms/img/ub1/1353886b-a6a7-4203-acd3-2066595ea362_ub1103_p_1500px.png",
    ],
    [
      "UC4041A",
      "ELECTROSIERRA DE CADENA 400MM",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/UC4041A.jpg",
    ],
    [
      "UH201DZ",
      "CORTA SETOS INALAMBRICO 200MM 10.8V LITIO ION",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/UH201DZ.jpg",
    ],
    [
      "UH5570",
      "CORTA SETOS   550MM",
      "https://cdn.makitatools.com/apps/cms/img/uh5/ff7cd50d-30d0-4fff-a225-6fd387b8fb8f_uh5570_p_1500px.png",
    ],
    [
      "UM600DZ",
      "PODADORA INALAMBRICA 160MM",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/UM600DZ.jpg",
    ],
    [
      "UR100DZ",
      "DESBROZADORA INALAMBRICA Litio-Ion",
      "https://www.makita.com.ar/uploads/products/1561406278-53411.jpg",
    ],
    [
      "UT1305",
      "MEZCLADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/UT1305_Mezcladora.png",
    ],
    [
      "UT2204",
      "MEZCLADOR DE HELICE",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/UT2204_Mezcladora.jpg",
    ],
    [
      "VC1310L",
      "ASPIRADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/VC1310L_Aspiradora_Humedo_seco-400x338.png",
    ],
    [
      "VC2512L",
      "ASPIRADORA 21L 1000W",
      "https://es.pdbmakita.com/images/1_Makita/101_machines/10105_JPG_Web/VC2512L.jpg",
    ],
    [
      "VC3210L",
      "ASPIRADORA",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/VC3210L_Aspiradora_Humedo_seco-400x338.png",
    ],
    [
      "XBP02Z",
      "SIERRA DE BANDA PORTATIL INALAMBRICA 18VCC Litio-Ion",
      "https://cdn.makitatools.com/apps/cms/img/xbp/1143dfa3-aff7-4784-9746-8463292f3557_xbp02z_p_1500px.png",
    ],
    [
      "XCU01Z",
      "SIERRA DE CADENA INALAMBRICA 18V LXT 4-1/2",
      "https://www.makita.com.mx/wp-content/uploads/2018/04/XCU01Z_Motosierra.png",
    ],
    [
      "XLT01Z",
      "ATORNILLADOR ANGULAR INALAMBRICO 18V LI-ION (DESC)",
      "https://cdn.makitatools.com/apps/cms/img/xlt/0bec5761-d7f8-438c-bbe2-c27ab1d1da22_xlt01z_p_1500px.png",
    ],
    [
      "XPH01Z",
      "ROTOMARTILLO ATORNILLADOR TALADRO 18V LXT Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2018/03/XPH01Z_Rotomartillo_Atornillador_Inalambrico.png",
    ],
    [
      "XRJ01Z",
      "SIERRA RECIPROCA INALAMBRICA 18Vcc LITIO-ION (DESC)",
      "https://cdn.makitatools.com/apps/cms/img/xrj/ef94fff9-bde1-460c-9138-9865f3f250ad_xrj01z_p_1500px.png",
    ],
    [
      "XRM08B",
      "ALTAVOZ BLUETOOTH USB INALAMBRICO 10.8Vcc - 18Vcc",
      "https://cdn.makitatools.com/apps/cms/img/xrm/2a78c9fe-3595-4d85-9946-03bde562a30d_xrm08b_p_1500px.png",
    ],
    [
      "XSC02Z",
      "SIERRA PARA METAL INALAMBRICA 18VCC 150MM (5-7/8î)",
      "https://cdn.makitatools.com/apps/cms/img/xsc/ff527fc5-67b4-41f6-9465-897ecad53dbe_xsc02z_p_1500px.png",
    ],
    [
      "XSF03R",
      "ATORNILLADOR INALAMBRICO P/TABLAROCA LXT 18V Li-Ion 4000rpm",
      "https://cdn.makitatools.com/apps/cms/img/xsf/2e569642-fbcc-4a82-b05a-f28e65beaccf_xsf03r_k_1500px.png",
    ],
    [
      "XSJ01T",
      "CIZALLA INALAMBRICA PARA METAL 18V LXT Litio-Ion",
      "https://cdn.makitatools.com/apps/cms/img/xsj/b9e853dc-b402-4ea6-b89d-29202c39b512_xsj01t_k_1500px.png",
    ],
    [
      "XSS03Z",
      "SIERRA CIRCULAR 5-3/8pul INALAMBRICA LXT 18V Litio-Ion",
      "https://cdn.makitatools.com/apps/cms/img/xss/056b0cfd-c980-4a46-b181-365aa5ff35f1_xss03z_p_1500px.png",
    ],
    [
      "XT610",
      "COMBO KIT LXT 18V 3.0Ah Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2018/09/XT610_Combo-400x338.png",
    ],
    [
      "XTR01Z",
      "RECORTADORA INALAMBRICA LXT 18V Litio-Ion",
      "https://cdn.makitatools.com/apps/cms/img/xtr/eba8dd20-1b3f-4836-bf3a-ccc272b77a70_xtr01z_p_1500px.png",
    ],
    [
      "XTS01Z",
      "ENGRAPADORA INALAMBRICA 18V Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/04/XTS01_Clavadora_inalambrica.png",
    ],
    [
      "XWT11Z",
      "LLAVE DE IMPACTO INALAMBRICA 18VCC Litio-Ion",
      "https://www.makita.com.mx/wp-content/uploads/2019/05/XWT11.jpg",
    ],
  ],
};

const data_arr = db.db;

function App() {
  return (
    <div className="App">
      {data_arr.map((item) => (
        <Images img_url={item[2]} title={item[1]} name={item[0]} />
      ))}
    </div>
  );
}

export default App;
