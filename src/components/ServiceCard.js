import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ServiceCard = ({ title, items }) => (
  <Card className="w-full max-w-md mx-auto my-4">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <Badge variant="outline" className="mr-2 mt-1">{item.price}</Badge>
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <ul className="list-disc list-inside pl-4">
                {item.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-sm">{feature}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default ServiceCard;
