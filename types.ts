// Fix: Added React import to resolve "Cannot find namespace 'React'" error for types like React.ReactNode.
import React from 'react';

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag?: string;
}

export interface PricingPlanProps {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  limitations?: string;
  recommended?: boolean;
}

export interface ComparisonRowProps {
  label: string;
  traditional: string;
  software: string;
  lia: string;
  liaHighlight?: boolean;
}