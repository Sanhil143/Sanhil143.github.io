import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { ChangeTheme } from "../Context/AppContext";

export default function GitStats() {
  const { Theme } = ChangeTheme();
  return (
    <>
      <Text
        textAlign="center"
        fontSize={{ base: "12px", md: "18px", lg: "20px" }}
        fontWeight={{ base: "600", md: "600" }}
        mt={{ base: "50px", md: "100px", lg: "85px" }}
        letterSpacing={{ base: "3px" }}
      >
        GITHUB STATS
      </Text>
      <Flex
        width={{ base: "75%", md: "85%", lg: "70%" }}
        m="auto"
        direction={{ base: "column-reverse", md: "row" }}
        justifyContent="center"
        alignItems="center"
        mt={{ base: "10px", md: "30px", lg: "50px" }}
        gap={{ base: "15px", md: "35px", lg: "70px" }}
      >
        <Box>
          <a href="https://github.com/Sanhil143">
            <Image
              width={{ base: "250px", md: "520px", lg: "500px" }}
              src={`https://github-readme-streak-stats.herokuapp.com/?user=Sanhil143&theme=${
                Theme === "light" ? "buefy" : "midnight-purple"
              }&show_icons=true&count_private=true&border=white&include_all_commits=true`}
            />
          </a>
        </Box>

        <Box>
          <a href="https://github.com/Sanhil143">
            <Image
              width={{ base: "300px", md: "520px", lg: "500px" }}
              src={`https://github-readme-stats.vercel.app/api?username=Sanhil143&show_icons=true&locale=en&show_icons=true&theme=${
                Theme === "light" ? "buefy" : "midnight-purple"
              }&include_all_commits=true&count_private=true`}
            />
          </a>
        </Box>
      </Flex>

    </>
  );
}
