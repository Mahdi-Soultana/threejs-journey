import GUI from 'lil-gui';

const gui = new GUI({ title: 'GUI Debug 🟩' });
type createDebugXYZ = {
  folderName: string;
  property: any;
};

export function createDebugXYZ({
  folderName = 'size cube',
  property,
}: createDebugXYZ) {
  const folder = gui.addFolder(folderName);
  folder
    .add(property, 'x')
    .name(`${folderName} X : `)
    .step(0.1)
    .min(-10)
    .max(10);
  folder
    .add(property, 'y')
    .name(`${folderName} Y : `)
    .step(0.1)
    .min(-10)
    .max(10);
  folder
    .add(property, 'z')
    .name(`${folderName} Z: `)
    .step(0.1)
    .min(-10)
    .max(10);

  return ({ folderName = 'size cube', property }: createDebugXYZ) => {
    const folder2 = folder.addFolder(folderName);
    folder2
      .add(property, 'x')
      .name(`${folderName} X : `)
      .step(0.1)
      .min(-10)
      .max(10);
    folder2
      .add(property, 'y')
      .name(`${folderName} Y : `)
      .step(0.1)
      .min(-10)
      .max(10);
    folder2
      .add(property, 'z')
      .name(`${folderName} Z: `)
      .step(0.1)
      .min(-10)
      .max(10);
  };
}
