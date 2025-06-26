import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

type Props = {
  size?: number;
  strokeWidth?: number;
  progress: number; // de 0 a 1
  label: string;
};

export default function CircularProgress({
  size = 100,
  strokeWidth = 10,
  progress,
  label,
}: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <Circle
          stroke="#e6e6e6"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke="#6FAEE6"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      <View style={[StyleSheet.absoluteFill, styles.labelContainer]}>
        <Text style={styles.percentageText}>{Math.round(progress * 100)}%</Text>
        <Text style={styles.labelText}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  labelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  labelText: {
    fontSize: 12,
    color: '#666',
  },
});
