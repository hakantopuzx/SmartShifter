import { GridRowsProp } from '@mui/x-data-grid';

export interface MaterialRow {
  id: number;
  materialNr: string;
  materialName: string;
  requiredQty: number;
  totalQty: number;
  materialNrRef: string;
  erpOrderNumber: string;
  orderStatus: string;
  suppliersAB: string;
}

export const materialRows: GridRowsProp = [
  {
    id: 1,
    materialNr: '131225',
    materialName: 'Schrumpfschlauch 6,4/2,0 ge 3:1 flachgewickelt',
    requiredQty: 3.40,
    totalQty: 340.00,
    materialNrRef: '131225',
    erpOrderNumber: '-',
    orderStatus: 'Bestellvorchlag / Reservation ist noch nicht fertig',
    suppliersAB: '-'
  },
  {
    id: 2,
    materialNr: '131225',
    materialName: 'Reihenklemme ZP 2,5/TAN/4 Weidmüller 1815500000',
    requiredQty: 1.00,
    totalQty: 100.00,
    materialNrRef: '131225',
    erpOrderNumber: '-',
    orderStatus: 'Bestellvorchlag / Reservation ist noch nicht fertig',
    suppliersAB: '-'
  },
  {
    id: 3,
    materialNr: '131225',
    materialName: 'Leitung UL-LIYY 4xAWG24 (4x0,22mm²) Kabeltronik 095042409',
    requiredQty: 8.00,
    totalQty: 800.00,
    materialNrRef: '131225',
    erpOrderNumber: '-',
    orderStatus: 'Bestellvorchlag / Reservation ist noch nicht fertig',
    suppliersAB: '-'
  },
  {
    id: 4,
    materialNr: '131225',
    materialName: 'Aderendhülse 0,25 mm² 8mm isoliert V30AE000002',
    requiredQty: 0.08,
    totalQty: 340.00,
    materialNrRef: '131225',
    erpOrderNumber: '-',
    orderStatus: 'Bestellvorchlag / Reservation ist noch nicht fertig',
    suppliersAB: '-'
  },
  {
    id: 5,
    materialNr: '131225',
    materialName: 'Leitung UL-LIYY 4xAWG24 (4x0,22mm²) Kabeltronik',
    requiredQty: 1.00,
    totalQty: 100.00,
    materialNrRef: '131225',
    erpOrderNumber: '-',
    orderStatus: '2Bestellvorchlag / Reservation ist noch nicht fertig',
    suppliersAB: '-'
  },
  {
    id: 6,
    materialNr: '131225',
    materialName: 'Leitung UL-LIYY 4xAWG24 (4x0,22mm²) Kabeltronik 095042409',
    requiredQty: 8.00,
    totalQty: 800.00,
    materialNrRef: '131225',
    erpOrderNumber: '-',
    orderStatus: 'Bestellvorchlag / Reservation ist noch nicht fertig',
    suppliersAB: '-'
  }
];