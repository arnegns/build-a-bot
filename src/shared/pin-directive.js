export default function (element, binding) {
  Object.keys(binding.value)
    .forEach((position) => {
    // eslint-disable-next-line no-param-reassign
      element.style[position] = binding.value[position];
    });
  // eslint-disable-next-line no-param-reassign
  element.style.position = 'absolute';
}
