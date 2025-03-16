import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  it("should render initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  it("should accpet and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: 10,
    });
    expect(result.current.count).toBe(10);
  });

  it("should increment the count", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

});
