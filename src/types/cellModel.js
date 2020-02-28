function cellModel(hIndex, vIndex, color) {
  if (hIndex !== null || hIndex !== undefined) this.hIndex = hIndex;
  if (vIndex !== null || vIndex !== undefined) this.vIndex = vIndex;
  if (color !== null || color !== undefined) this.color = color;
}

export default cellModel;
