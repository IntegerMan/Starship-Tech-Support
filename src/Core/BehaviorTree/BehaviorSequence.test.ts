import * as BehaviorSequence from "./BehaviorSequence"

// @ponicode
describe("addChild", () => {
    let inst: any

    beforeEach(() => {
        inst = new BehaviorSequence.BehaviorSequence([undefined, undefined, undefined, undefined, undefined])
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.addChild(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
