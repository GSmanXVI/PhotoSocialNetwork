using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplicationJWT.Migrations.Application
{
    public partial class ThumbnailsAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ThumbnailPath",
                table: "Posts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ThumbnailPath",
                table: "Posts");
        }
    }
}
