import { shallowMount } from "@vue/test-utils";
import Home from "@/components/Home.vue";

describe("Home.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Home, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
