export const useArrowNavigation = () => {
  const handleArrowNavigation = (event: KeyboardEvent, headerClass: string) => {
    event.preventDefault();
    const direction = event.key;
    const currentFocusedHeader = document.activeElement as HTMLButtonElement;
    const accordionHeaderList = Array.from(
      document.querySelectorAll(`.${headerClass}`),
    );

    const length = accordionHeaderList.length;
    const indexOfCurrentFocusedHeader = Array.from(
      accordionHeaderList,
    ).findIndex((el) => el.id == currentFocusedHeader.id);

    if (length <= 1) return;

    if (direction === "down") {
      if (indexOfCurrentFocusedHeader === length - 1) {
        (accordionHeaderList[0] as HTMLButtonElement).focus();
      } else {
        (
          accordionHeaderList[
            indexOfCurrentFocusedHeader + 1
          ] as HTMLButtonElement
        ).focus();
      }
    } else {
      if (indexOfCurrentFocusedHeader === 0) {
        (accordionHeaderList[length - 1] as HTMLButtonElement).focus();
      } else {
        (
          accordionHeaderList[
            indexOfCurrentFocusedHeader - 1
          ] as HTMLButtonElement
        ).focus();
      }
    }
  };

  return {
    handleArrowNavigation,
  };
};
