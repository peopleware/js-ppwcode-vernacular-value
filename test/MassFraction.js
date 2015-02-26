/*
Copyright 2013 - $Date $ by PeopleWare n.v.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

define(["../MassFraction", "./Fraction"],
  function(MassFraction, testGeneratorFraction) {

    function testMassFraction(Constructor, kwargs1, kwargs2, json2objectPropertyNames) {
      testGeneratorFraction(Constructor, kwargs1, kwargs2, json2objectPropertyNames);
    }

    //noinspection MagicNumberJS,MagicNumberJS,MagicNumberJS
    testGeneratorFraction(
      MassFraction,
      {
        scalarValue: 123,
        unit: "mg/kg"
      },
      {
        scalarValue: 0.456789,
        unit: "0..1"
      }
    );

    return testMassFraction;
  }
);
