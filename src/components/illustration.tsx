import { createAvatar } from '@dicebear/core';
import { micah } from '@dicebear/collection';

type EyebrowOption = 'up' | 'down' | 'eyelashesUp' | 'eyelashesDown';
type MouthOption =
  | "smile"
  | "laughing"
  | "surprised"
  | "sad"
  | "nervous"
  | "pucker"
  | "frown"
  | "smirk"
  ;


interface IllustrationProps {
    seed: string;
    eyebrows:EyebrowOption[]
    mouth: MouthOption[];
    flip?:boolean;
    className:string
}

export const Illustration:React.FC<IllustrationProps> = ({ seed, eyebrows ,mouth, flip , className}) => {
    const avatar = createAvatar(micah, {
        seed,
        eyebrows,
        mouth,
        flip
    });
    const svg = avatar.toString();
    return (
        <div className={` top-5 left-0 transform  ${className}`} dangerouslySetInnerHTML={{ __html: svg }} />
    )
}




