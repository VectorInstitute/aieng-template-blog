/**
 * Neural network visualization module
 */

export function initNeuralNetwork() {
  const activateButton = document.getElementById('activate-network');
  const neurons = document.querySelectorAll('.neuron');
  
  activateButton.addEventListener('click', () => {
    // Reset all neurons
    neurons.forEach(neuron => {
      neuron.style.backgroundColor = '#ccc';
      neuron.style.boxShadow = 'none';
    });
    
    // Activate input layer
    const layers = document.querySelectorAll('.network-layer');
    
    function activateLayer(layerIndex) {
      if (layerIndex >= layers.length) return;
      
      const neurons = layers[layerIndex].querySelectorAll('.neuron');
      
      neurons.forEach((neuron, i) => {
        setTimeout(() => {
          // Random activation (in a real network, this would be based on weights)
          const activation = Math.random();
          const colorIntensity = Math.floor(activation * 255);
          
          if (neuron.classList.contains('output-neuron')) {
            // Output neurons get a distinct color
            neuron.style.backgroundColor = `rgb(255, ${255 - colorIntensity}, 0)`;
            neuron.style.boxShadow = `0 0 15px rgba(255, ${255 - colorIntensity}, 0, 0.7)`;
          } else {
            neuron.style.backgroundColor = `rgb(0, ${colorIntensity}, 255)`;
            neuron.style.boxShadow = `0 0 15px rgba(0, ${colorIntensity}, 255, 0.7)`;
          }
        }, i * 150); // Stagger the activation within each layer
      });
      
      // Activate next layer after a delay
      setTimeout(() => {
        activateLayer(layerIndex + 1);
      }, neurons.length * 150 + 300);
    }
    
    // Start the activation cascade
    activateLayer(0);
  });
}
