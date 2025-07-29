import type IFixtureCardProp from "~/types/components/IFixtureCardProp";
import type { ILeagueStanding } from "~/types/components/ILeagueStandingProp";
import type INewsCardProp from "~/types/components/INewsCardProp";
import type IPlayerCardProp from "~/types/components/IPlayerCardProp";
import type { ITrophyCard } from "~/types/components/ITrophyCardProp";
import type ILeagueStandingDto from "~/types/dtos/ILeagueStandingDto";
import type INewsDto from "~/types/dtos/INewsDto";
import type ITeamFixtureDto from "~/types/dtos/ITeamFixtureDto";
import type ITeamSquadDto from "~/types/dtos/ITeamSquadDto";
import type ITrophyDto from "~/types/dtos/ITrophyDto";

export default class DtoMapper {
	static mapNewsDtoToNewsProp(newsDto: INewsDto): INewsCardProp[] {
		return newsDto.articles.map((article): INewsCardProp => {
			return {
				title: article.title,
				author: article.author || "",
				description: article.description,
				content: article.content,
				publishedAt: new Date(article.publishedAt),
				sourceName: article.source.name,
				url: article.url,
				imageUrl: article.urlToImage,
			};
		});
	}

	static mapFixturesDtoToFixturesProp(fixturesDto: ITeamFixtureDto): IFixtureCardProp[] {
		return fixturesDto.response.map((res): IFixtureCardProp => {
			return {
				fixtureId: res.fixture.id,
				competitionName: res.league.name,
				matchDate: new Date(res.fixture.date),
				venue: "" + res.fixture.venue.name,
				homeTeamId: res.teams.home.id,
				homeTeamName: res.teams.home.name,
				homeTeamScore: res.score.fulltime.home,
				awayTeamId: res.teams.away.id,
				awayTeamName: res.teams.away.name,
				awayTeamScore: res.score.fulltime.away,
			};
		});
	}

	static mapLeagueStandingDtoToLeagueStandingProp(leagueStandingDto: ILeagueStandingDto): ILeagueStanding | null {
		const resLeague = leagueStandingDto.response.at(0);
		if (resLeague) {
			return {
				name: resLeague.league.name,
				country: resLeague.league.country,
				logo: resLeague.league.logo,
				season: resLeague.league.season.toString(),
				standings: resLeague.league.standings.flatMap((standingGroup) =>
					standingGroup.map((standing) => ({
						groupName: standing.group,
						rank: standing.rank,
						teamId: standing.team.id,
						teamName: standing.team.name,
						point: standing.points,
						played: standing.all.played,
						win: standing.all.win,
						draw: standing.all.draw,
						lose: standing.all.lose,
						goal: standing.all.goals.for,
						conceaded: standing.all.goals.against,
						goalDiff: standing.goalsDiff,
						form: standing.form,
						status: standing.status,
						description: standing.description,
					})),
				),
			};
		}

		return null;
	}

	static mapTeamSquadDtoToTeamSquadProp(teamSquadDto: ITeamSquadDto): IPlayerCardProp[] {
		return teamSquadDto.response
			.map((res): IPlayerCardProp[] => {
				return res.players.map((player): IPlayerCardProp => {
					return {
						id: "" + player.id,
						name: player.name,
						teamLogo: res.team.logo,
						age: player.age,
						number: player.number,
						position: player.position,
						image: player.photo,
					};
				});
			})
			.flat();
	}

	static mapTrophyDtoToTrophyProp(trophyDto: ITrophyDto): ITrophyCard[] {
		return trophyDto.trophies.map((trophy): ITrophyCard => {
			return {
				name: trophy.name,
				region: trophy.region,
				status: trophy.status,
				year: trophy.year,
				description: trophy.description,
				image: trophy.image,
			};
		});
	}
}
