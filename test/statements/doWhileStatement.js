import assert from "assert";
import { DoWhileStatement } from "statements";
import esprima from "esprima";
import createJspiclTranspiler from "transpile";

describe("DoWhileStatement", () => {
  const transpile = createJspiclTranspiler();

  it("transpiles body and test expression", () => {
    const input = "while (testexpression) { body; }";
    const { body: [statement] } = esprima.parse(input);

    const output = `repeat
    body
  until not (testexpression)`;

    assert.equal(DoWhileStatement(statement, { transpile }), output);
  });
});
