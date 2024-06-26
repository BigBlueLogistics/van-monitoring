/**
  The gradientChartLine() function helps you to create a gradient color for the chart line
 */
import rgba from '@/components/organisms/ThemeRegistry/theme/functions/rgba';

function gradientChartLine(chart: HTMLCanvasElement | null, color: any, opacity = 0.2) {
  const ctx = chart?.getContext('2d');
  if (ctx) {
    const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    const primaryColor = rgba(color, opacity).toString();

    gradientStroke.addColorStop(1, primaryColor);
    gradientStroke.addColorStop(0.2, 'rgba(72, 72, 176, 0.0)');
    gradientStroke.addColorStop(0, 'rgba(203, 12, 159, 0)');

    return gradientStroke;
  }
  return ctx;
}

export default gradientChartLine;
