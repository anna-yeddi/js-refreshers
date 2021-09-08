import { createParagsUI } from "./07-dom-createParagsUI";

describe("07-dom-createParagsUI.js", () => {
  describe("createParagsUI", () => {
    it("is a function", () => {
      expect(createParagsUI).toBeInstanceOf(Function);
    });

    describe("createParagsUI functional tests", () => {
      let el = null;
      let data = null;
      beforeEach(() => {
        el = document.createElement("div");
        data = ["Originally First", "Originally Second", "Originally Third"];

        createParagsUI(el, data);
      });
      it("renders initial markup", () => {
        const parags = el.querySelector("#paragraphs");
        expect(parags.tagName).toBe("OL");
        expect(parags.querySelector("li")).toBeTruthy();
        expect(parags.querySelectorAll("li")).toHaveLength(data.length);

        const form = el.querySelector("form");
        expect(form.querySelector("label")).toBeTruthy();
        expect(form.querySelector("label").hasAttribute("for")).toBeTruthy();
        expect(form.querySelector("label").getAttribute("for")).toEqual(
          form.querySelector("textarea").getAttribute("id")
        );
        expect(form.querySelector("textarea")).toBeTruthy();
        expect(form.querySelector('button[type="submit"]')).toBeTruthy();
        expect(
          form.querySelector('button[type="submit"]').hasAttribute("hidden")
        ).toBeTruthy();
      });
      it("clears input value on submit", () => {
        el.querySelector("textarea").value = "Some text here";
        el.querySelector("form").submit();
        expect(el.querySelector("textarea").value).toBe("");
      });
      it("hides Submit button on submit", () => {
        el.querySelector("textarea").value = "Some text here";
        el.querySelector("form").submit();
        const elHasAttribute = el
          .querySelector('button[type="submit"')
          .hasAttribute("hidden");
        expect(elHasAttribute).toBeTruthy();
      });
      it("adds input value to the list of paragraphs", () => {
        el.querySelector("textarea").value = "Some text here";
        el.querySelector("form").submit();
        expect(el.querySelectorAll("ol#paragraphs li")).toHaveLength(
          data.length
        );
        expect(el.querySelectorAll("ol#paragraphs li")).toHaveLength(4);
        expect(data).toHaveLength(4);
        expect(el.querySelector("ol#paragraphs li").innerText).toBe(
          "Some text here"
        );
      });
      it("handles visibility of the Submit button on user input", () => {
        el.querySelector("textarea").value = "Some text here";
        el.querySelector("textarea").dispatchEvent(new Event("input"));
        expect(
          el.querySelector('button[type="submit"').hasAttribute("hidden")
        ).toBeFalsy();

        el.querySelector("textarea").value = "";
        el.querySelector("textarea").dispatchEvent(new Event("input"));
        expect(el.querySelector("textarea").value).toBe("");
        expect(
          el.querySelector('button[type="submit"').hasAttribute("hidden")
        ).toBeTruthy();
      });
      it("limits the number of paragraphs to 5", () => {
        const values = ["Fourth", "Fifth", "Sixth", "Seventh"];
        values.forEach((value) => {
          el.querySelector("textarea").value = value;
          el.querySelector("form").submit();
        });

        expect(el.querySelectorAll("ol#paragraphs li")).toHaveLength(5);
        expect(data).toHaveLength(5);
      });
      it("adds new elements to the top of list", () => {
        const values = ["Fourth", "Fifth", "Sixth", "Seventh", "Eighth"];
        values.forEach((value) => {
          el.querySelector("textarea").value = value;
          el.querySelector("form").submit();
        });

        expect(
          [...el.querySelectorAll("ol#paragraphs li")].map(
            (elInner) => elInner.innerText
          )
        ).toEqual(values.reverse());
      });
    });
  });
});
