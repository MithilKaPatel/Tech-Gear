export const ProgressSteps = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center flex-1">
          <div className="flex flex-col items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                currentStep >= step.number
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step.number}
            </div>
            <span className="text-sm mt-2">{step.title}</span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-1 flex-1 transition-colors ${
                currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};
