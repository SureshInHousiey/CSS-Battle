export type Design = {
  id: number;
  html: string;
  label: 'easy' | 'medium' | 'hard';
  colors?: string[];
};

function generateEasyDesign(id: number): Design {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  return {
    id,
    label: 'easy',
    html: `<label class="switch">
  <input type="checkbox" />
  <span class="slider"></span>
</label>
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 1rem auto;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: ${color};
  transition: 0.4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: ${color};
}
input:checked + .slider:before {
  transform: translateX(26px);
}
</style>`,
    colors: [color],
  };
}

function generateMediumDesign(id: number): Design {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  return {
    id,
    label: 'medium',
    html: `<button class="futuristic-btn">Press Me</button>
<style>
.futuristic-btn {
  background: linear-gradient(135deg, ${color}, #000);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 0 0 20px ${color};
  cursor: pointer;
  transition: all 0.3s ease;
}
.futuristic-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px ${color};
}
</style>`,
    colors: [color],
  };
}

function generateHardDesign(id: number): Design {
  const color1 = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  const color2 = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  return {
    id,
    label: 'hard',
    html: `<div class="card">
  <h3>Card Title ${id}</h3>
  <p>This is a card with a gradient background and soft glass effect.</p>
</div>
<style>
.card {
  background: linear-gradient(135deg, ${color1}, ${color2});
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 12px;
  color: white;
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  margin: 2rem auto;
  width: 300px;
  font-family: sans-serif;
  text-align: center;
}
</style>`,
    colors: [color1, color2],
  };
}

export const designs: Design[] = [
  ...Array.from({ length: 30 }, (_, i) => generateEasyDesign(i + 1)),
  ...Array.from({ length: 30 }, (_, i) => generateMediumDesign(i + 31)),
  ...Array.from({ length: 40 }, (_, i) => generateHardDesign(i + 61)),
];
