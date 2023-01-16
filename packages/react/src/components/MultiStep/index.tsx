import { Label, MultiStepContainer, Step, Steps } from "./styles";

export interface MultiStepProps {
    size: number;
    currentStep?: number;
}

export function MultiStep({size, currentStep=1}: MultiStepProps){
    
    return (
        <MultiStepContainer>
            <Label>passo {currentStep} de {size}</Label>
            <Steps css={{'--steps-size': size}}>
                {Array.from({length: size}, (_,index) => index + 1).map(step => (
                    <Step key={step} active={step <= currentStep}/>
                ))}
            </Steps>
        </MultiStepContainer>
    )
}

MultiStep.displayName = "MultiStep"