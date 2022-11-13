import React from 'react'
import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps
        css={{
          '--steps-size': size,
        }}
      >
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step active={currentStep >= step} key={step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
