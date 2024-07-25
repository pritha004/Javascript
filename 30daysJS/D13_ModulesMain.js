// Named Exports
import { addNumbers , person} from './D13_ModulesMath.js';

// Default Exports
import displayVal from './D13_ModulesDefaultExp.js';

// Importing Entire Modules
import * as math from "./D13_ModulesAllImport.js";

// Using third-party modules
import lodash from "lodash";

const result = addNumbers(5, 3);
console.log(`The result of adding 5 and 3 is: ${result}`);

person.display();
displayVal(8);

console.log(math.PI);
console.log(math.divide(7,3));

console.log(lodash.VERSION);

