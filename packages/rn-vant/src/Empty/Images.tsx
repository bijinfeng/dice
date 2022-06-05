import React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Rect,
  RadialGradient,
  Ellipse,
  Circle,
} from 'react-native-svg';

export const renderNetwork = () => (
  <Svg viewBox="0 0 160 160">
    <Defs>
      <LinearGradient id="c" x1="50%" x2="50%" y2="84%">
        <Stop stopColor="#EBEDF0" offset="0%" />
        <Stop stopColor="#DCDEE0" offset="100%" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient id="d" x1="100%" x2="100%" y2="100%">
        <Stop stopColor="#EAEDF0" offset="0%" />
        <Stop stopColor="#DCDEE0" offset="100%" />
      </LinearGradient>
      <RadialGradient
        id="b"
        cx="50%"
        cy="0%"
        fx="50%"
        fy="0%"
        r="100%"
        gradientTransform="matrix(0 1 -.54 0 .5 -.5)"
      >
        <Stop stopColor="#EBEDF0" offset="0%" />
        <Stop stopColor="#FFF" offset="100%" stopOpacity={0} />
      </RadialGradient>
    </Defs>
    <G fill="none">
      <Defs>
        <LinearGradient id="a" x1="64%" y1="100%" x2="64%">
          <Stop stopColor="#FFF" offset="0%" stopOpacity={0.5} />
          <Stop stopColor="#F2F3F5" offset="100%" />
        </LinearGradient>
      </Defs>
      <G opacity={0.8} fill="url(#a)">
        <Path d="M36 131V53H16v20H2v58h34zM123 15h22v14h9v77h-31V15z" />
      </G>
      <Path fill="url(#b)" d="M0 139h160v21H0z" />
      <Path d="M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z" fill="url(#c)" />
      <G opacity={0.6} strokeLinecap="round" strokeWidth={7} stroke="url(#d)">
        <Path d="M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13M53 36a34 34 0 0 0 0 48M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13M106 84a34 34 0 0 0 0-48" />
      </G>
      <G transform="translate(31 105)">
        <Rect fill="#EBEDF0" width={98} height={34} rx={2} />
        <Rect fill="#FFF" x={9} y={8} width={80} height={18} rx={1.1} />
        <Rect fill="#EBEDF0" x={15} y={12} width={18} height={6} rx={1.1} />
      </G>
    </G>
  </Svg>
);
export const renderMaterial = () => (
  <Svg viewBox="0 0 160 160">
    <Defs>
      <LinearGradient x1="50%" x2="50%" y2="100%" id="c">
        <Stop stopColor="#F2F3F5" offset="0%" />
        <Stop stopColor="#DCDEE0" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="95%" y1="48%" x2="5.5%" y2="51%" id="d">
        <Stop stopColor="#EAEDF1" offset="0%" />
        <Stop stopColor="#DCDEE0" offset="100%" />
      </LinearGradient>
      <LinearGradient y1="45%" x2="100%" y2="54%" id="e">
        <Stop stopColor="#EAEDF1" offset="0%" />
        <Stop stopColor="#DCDEE0" offset="100%" />
      </LinearGradient>
    </Defs>
    <Defs>
      <LinearGradient id="a" x1="64%" y1="100%" x2="64%">
        <Stop stopColor="#FFF" offset="0%" stopOpacity={0.5} />
        <Stop stopColor="#F2F3F5" offset="100%" />
      </LinearGradient>
    </Defs>
    <G opacity={0.8} fill="url(#a)">
      <Path d="M36 131V53H16v20H2v58h34zM123 15h22v14h9v77h-31V15z" />
    </G>
    <Defs>
      <LinearGradient id="b" x1="64%" y1="97%" x2="64%" y2="0%">
        <Stop stopColor="#F2F3F5" offset="0%" stopOpacity={0.3} />
        <Stop stopColor="#F2F3F5" offset="100%" />
      </LinearGradient>
    </Defs>
    <G opacity={0.8} fill="url(#b)">
      <Path d="M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9ZM19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z" />
    </G>
    <G transform="translate(36 50)" fill="none">
      <G transform="translate(8)">
        <Rect fill="#EBEDF0" opacity={0.6} x={38} y={13} width={36} height={53} rx={2} />
        <Rect fill="url(#c)" width={64} height={66} rx={2} />
        <Rect fill="#FFF" x={6} y={6} width={52} height={55} rx={1} />
        <G transform="translate(15 17)" fill="url(#d)">
          <Rect width={34} height={6} rx={1} />
          <Path d="M0 14h34v6H0z" />
          <Rect y={28} width={34} height={6} rx={1} />
        </G>
      </G>
      <Rect fill="url(#e)" y={61} width={88} height={28} rx={1} />
      <Rect fill="#F7F8FA" x={29} y={72} width={30} height={6} rx={1} />
    </G>
  </Svg>
);
export const renderError = () => (
  <Svg viewBox="0 0 160 160">
    <Defs>
      <LinearGradient x1="50%" x2="50%" y2="100%" id="d">
        <Stop stopColor="#EAEDF1" offset="0%" />
        <Stop stopColor="#DCDEE0" offset="100%" />
      </LinearGradient>
    </Defs>
    <Defs>
      <LinearGradient id="a" x1="64%" y1="100%" x2="64%">
        <Stop stopColor="#FFF" offset="0%" stopOpacity={0.5} />
        <Stop stopColor="#F2F3F5" offset="100%" />
      </LinearGradient>
    </Defs>
    <G opacity={0.8} fill="url(#a)">
      <Path d="M36 131V53H16v20H2v58h34zM123 15h22v14h9v77h-31V15z" />
    </G>
    <Defs>
      <LinearGradient id="b" x1="64%" y1="97%" x2="64%" y2="0%">
        <Stop stopColor="#F2F3F5" offset="0%" stopOpacity={0.3} />
        <Stop stopColor="#F2F3F5" offset="100%" />
      </LinearGradient>
    </Defs>
    <G opacity={0.8} fill="url(#b)">
      <Path d="M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9ZM19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z" />
    </G>
    <Defs>
      <RadialGradient
        id="c"
        cx="50%"
        cy="54%"
        fx="50%"
        fy="54%"
        r="297%"
        gradientTransform="matrix(-.16 0 0 -.33 .58 .72)"
      >
        <Stop stopColor="#EBEDF0" offset="0%" />
        <Stop stopColor="#F2F3F5" offset="100%" stopOpacity={0.3} />
      </RadialGradient>
    </Defs>
    <Ellipse fill="url(#c)" opacity={0.8} cx={80} cy={140} rx={46} ry={8} />
    <Path
      d="m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z"
      fill="url(#d)"
    />
  </Svg>
);
export const renderSearch = () => (
  <Svg viewBox="0 0 160 160">
    <Defs>
      <LinearGradient x1="50%" y1="100%" x2="50%" id="d">
        <Stop stopColor="#EEE" offset="0%" />
        <Stop stopColor="#D8D8D8" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="100%" y1="50%" y2="50%" id="e">
        <Stop stopColor="#F2F3F5" offset="0%" />
        <Stop stopColor="#DCDEE0" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" x2="50%" y2="100%" id="f">
        <Stop stopColor="#F2F3F5" offset="0%" />
        <Stop stopColor="#DCDEE0" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" x2="50%" y2="100%" id="g">
        <Stop stopColor="#FFF" offset="0%" />
        <Stop stopColor="#F7F8FA" offset="100%" />
      </LinearGradient>
    </Defs>
    <Defs>
      <LinearGradient id="a" x1="64%" y1="100%" x2="64%">
        <Stop stopColor="#FFF" offset="0%" stopOpacity={0.5} />
        <Stop stopColor="#F2F3F5" offset="100%" />
      </LinearGradient>
    </Defs>
    <G opacity={0.8} fill="url(#a)">
      <Path d="M36 131V53H16v20H2v58h34zM123 15h22v14h9v77h-31V15z" />
    </G>
    <Defs>
      <LinearGradient id="b" x1="64%" y1="97%" x2="64%" y2="0%">
        <Stop stopColor="#F2F3F5" offset="0%" stopOpacity={0.3} />
        <Stop stopColor="#F2F3F5" offset="100%" />
      </LinearGradient>
    </Defs>
    <G opacity={0.8} fill="url(#b)">
      <Path d="M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9ZM19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z" />
    </G>
    <Defs>
      <RadialGradient
        id="c"
        cx="50%"
        cy="54%"
        fx="50%"
        fy="54%"
        r="297%"
        gradientTransform="matrix(-.16 0 0 -.33 .58 .72)"
      >
        <Stop stopColor="#EBEDF0" offset="0%" />
        <Stop stopColor="#F2F3F5" offset="100%" stopOpacity={0.3} />
      </RadialGradient>
    </Defs>
    <Ellipse fill="url(#c)" opacity={0.8} cx={80} cy={140} rx={46} ry={8} />
    <G transform="rotate(-45 113 -4)" fill="none">
      <Rect fill="url(#d)" x={24} y={52.8} width={5.8} height={19} rx={1} />
      <Rect fill="url(#e)" x={22.1} y={67.3} width={9.9} height={28} rx={1} />
      <Circle stroke="url(#f)" strokeWidth={8} cx={27} cy={27} r={27} />
      <Circle fill="url(#g)" cx={27} cy={27} r={16} />
      <Path
        d="M37 7c-8 0-15 5-16 12"
        stroke="url(#f)"
        strokeWidth={3}
        opacity={0.5}
        strokeLinecap="round"
        transform="rotate(45 29 13)"
      />
    </G>
  </Svg>
);
