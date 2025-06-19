export type Design = {
  id: number;
  html: string;
  label: 'easy' | 'medium' | 'hard';
  colors?: string[];
};

type Shape = "square" | "rounded" | "pill" | "triangle-up" | "triangle-down" | "rhombus" | "star" | "hexagon" | "heart" | "parallelogram";

const shapes: Shape[] = [
  "square",
  "rounded",
  "pill",
  "triangle-up",
  "triangle-down",
  "rhombus",
  "star",
  "hexagon",
  "heart",
  "parallelogram",
];

function generateShapeHTML(shape: Shape, color: string): string {
  switch (shape) {
    case "square":
      return `<div class="shape"></div>
<style>
.shape {
  width: 100px;
  height: 100px;
  background: ${color};
  margin: 30px auto;
}
</style>`;
    case "rounded":
      return `<div class="shape"></div>
<style>
.shape {
  width: 100px;
  height: 100px;
  background: ${color};
  border-radius: 20px;
  margin: 30px auto;
}
</style>`;
    case "pill":
      return `<div class="shape"></div>
<style>
.shape {
  width: 150px;
  height: 50px;
  background: ${color};
  border-radius: 50px;
  margin: 30px auto;
}
</style>`;
    case "triangle-up":
      return `<div class="shape"></div>
<style>
.shape {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid ${color};
  margin: 30px auto;
}
</style>`;
    case "triangle-down":
      return `<div class="shape"></div>
<style>
.shape {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 100px solid ${color};
  margin: 30px auto;
}
</style>`;
    case "rhombus":
      return `<div class="shape"></div>
<style>
.shape {
  width: 100px;
  height: 100px;
  background: ${color};
  transform: rotate(45deg);
  margin: 30px auto;
}
</style>`;
    case "star":
      return `<div class="shape"></div>
<style>
.shape {
  color: ${color};
  font-size: 100px;
  text-align: center;
  line-height: 100px;
  margin: 30px auto;
}
.shape::before {
  content: '★';
}
</style>`;
    case "hexagon":
      return `<div class="shape"></div>
<style>
.shape {
  width: 100px;
  height: 55px;
  background: ${color};
  position: relative;
  margin: 30px auto;
}
.shape::before,
.shape::after {
  content: '';
  position: absolute;
  width: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
}
.shape::before {
  bottom: 100%;
  border-bottom: 27.5px solid ${color};
}
.shape::after {
  top: 100%;
  border-top: 27.5px solid ${color};
}
</style>`;
    case "heart":
      return `<div class="shape"></div>
<style>
.shape {
  width: 100px;
  height: 90px;
  position: relative;
  margin: 30px auto;
}
.shape::before,
.shape::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 90px;
  background: ${color};
  border-radius: 50px 50px 0 0;
}
.shape::before {
  left: 50px;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}
.shape::after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}
</style>`;
    case "parallelogram":
      return `<div class="shape"></div>
<style>
.shape {
  width: 120px;
  height: 60px;
  background: ${color};
  transform: skew(20deg);
  margin: 30px auto;
}
</style>`;
  }
}

function generateDesigns(label: 'easy' | 'medium' | 'hard', count: number, startId: number): Design[] {
  return Array.from({ length: count }, (_, i) => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    const shape: Shape = shapes[Math.floor(Math.random() * shapes.length)];
    return {
      id: startId + i,
      label,
      html: generateShapeHTML(shape, color),
      colors: [color],
    };
  });
}
export const designs: Design[] = [
  ...generateDesigns('easy', 30, 1),
  ...generateDesigns('medium', 30, 31),
  ...generateDesigns('hard', 40, 61),
];
