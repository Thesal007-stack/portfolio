import Image from "../atoms/Image";
import Text from "../atoms/Text";
import CallToAction from "../molecules/CallToAction";
import CustomButton from "../atoms/custom-button"
import { useTheme } from "../../../../shared/hooks/ThemeContext";
const HeroSection = () => {
    const { isDarkTheme } = useTheme();
  return (
    <section className="flex font-mono gap-5 items-center justify-between p-10  text-white">
      <div className="flex flex-col space-y-5">
        <Text variant="h1" color="text-red-500">
          Hi, I'm  Jenni Kim
        </Text>
        <Text variant="p"  color={`${isDarkTheme ? 'text-white font-bold  ':'text-black font-bold'}  `}>
          Front-end Developer
        </Text>
        <CallToAction/>
      </div>
      <Image src="https://cdn140.picsart.com/348572043017211.png" alt="Visal" className="w-1/3" />
      <div className="text-left space-y-5">
        <Text variant="p" color="text-orange-500 text-3xl font-bold">
          Expert on
        </Text>
        <Text variant="p" color={`${isDarkTheme ? 'text-white font-bold':'text-black font-bold'}  `}>Based in Cambodia</Text>
        <Text variant="p" color={`${isDarkTheme ? 'text-white':'text-black'}  `}>I'm developer and UI/UX designer.</Text>
        <Text variant="p" color={`${isDarkTheme ? 'text-white':'text-black'}  `}>
          Hey are looking for designer to build your brand and grow your
          business? let's shake hands with me.
        </Text>
        <CustomButton>
          Download CV
        </CustomButton>
      </div>
  
    </section>
  );
};

export default HeroSection;