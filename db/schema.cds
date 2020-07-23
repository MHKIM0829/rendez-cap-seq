using { managed } from '@sap/cds/common';

namespace seq.db;

entity IFLT0001 {
  key FLOWUUID     : UUID @odata.Type : 'Edm.String';
  FLOWCODE         : String(5);
  FLOWNO           : String(10);
  FLOWCNT          : String(3);
  TITLE            : String(100);
}